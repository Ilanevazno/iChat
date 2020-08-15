const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const shortid = require('shortid');
const bodyParser = require("body-parser");
const server = http.createServer(app);
const io = require('socket.io')(server);

class Main {
  constructor() {
    this.port = process.env.POST || '3010';
    this.rooms = {};
    this.urlencodedParser = bodyParser.urlencoded({ extended: false })
    this.prepareServer();
    this.prepareApp();
    this.listenRestApiRequests();
    this.listenSocketIoRequests();
  }

  prepareServer() {
    server.listen(this.port);
  }

  prepareApp() {
    app.use(cors());
    app.use(bodyParser.json());
    app.set('port', this.port);
  }

  listenRestApiRequests() {
    app.post('/users', this.urlencodedParser, (req, res) => {
      let { userName, roomId } = req.body;

      // Если нет id комнаты, генерируем
      if (roomId === '') {
        roomId = shortid.generate()
      } else {
        // проверяем наличие дублирующего имени пользователя в комнате
        const isFoundedSomeUser = this.rooms[roomId] ? !!this.rooms[roomId].filter(user => user.userName === userName).length : false;

        console.log(this.rooms[roomId], 'username =>', userName);

        if (isFoundedSomeUser) return res.send({
          type: 'error',
          message: 'Пользователь с данным именем уже находится в комнате, попробуйте другой ник.',
        });
      };

      this.rooms[roomId] ? this.rooms[roomId].push({ userName }) : this.rooms[roomId] = [{ userName }];

      res.send({
        type: 'success',
      });
    });
  }

  listenSocketIoRequests() {
    io.on('connection', socket => {
      socket.on('join-room', data => {
        const currentRoom = data.roomId ? data.roomId : shortid.generate();
        const currentUser = data.userName;

        socket.join(currentRoom);

        io.to(currentRoom).emit('chat-message', {
          author: 'System',
          text: `${currentUser} присоединился к комнате`,
        });

        socket.on('disconnect', () => {
          io.to(currentRoom).emit('chat-message', {
            author: 'System',
            text: `${currentUser} вышел из комнаты`,
          })
        });
      });

      socket.on('new-message', (message) => {
        io.to(message.roomId).emit('chat-message', message);
        console.log('Сообщение', message);
      })
    });
  };
}

new Main();