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
    this.port = '3010';
    this.rooms = {};
    this.urlencodedParser = bodyParser.urlencoded({ extended: false })
    this.prepareServer();
    this.prepareApp();
    this.listenRestApiRequests();
    this.listenSocketIoRequests();
  }

  devLog(message) {
    if (process.env.NODE_ENV === 'development') {
      console.log(message);
    };
  }

  prepareServer() {
    server.listen(this.port);
  }

  prepareApp() {
    app.use(cors());
    app.use(bodyParser.json());
    app.set('port', this.port);
  }

  // метод для прослушки всех REST API запросов
  listenRestApiRequests() {
    app.post('/users', this.urlencodedParser, (req, res) => {
      let { userName, roomId } = req.body;

      // Если нет id комнаты, генерируем
      if (roomId === '') {
        roomId = shortid.generate()
      } else {
        // проверяем наличие дублирующего имени пользователя в комнате
        const isFoundedSomeUser = this.rooms[roomId] ? !!this.rooms[roomId].filter(user => user.userName === userName).length : false;

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

  prepareRoom(roomId) {
    const room = roomId;

    return (event, data) => {
      io.to(room).emit(event, data);
    }
  }

  // Метод для прослушки сообщений от сокета
  listenSocketIoRequests() {
    io.on('connection', socket => {
      socket.on('join-room', data => {
        // устанавливаем id текущей комнаты и имя обратившегося пользователя
        const currentRoom = data.roomId ? data.roomId : shortid.generate();
        const currentUser = data.userName;
        const sendSignalToRoom = this.prepareRoom(currentRoom)

        socket.join(currentRoom);

        // отправляем новый объект активных пользователей
        sendSignalToRoom('update-online-count', {
          currentRoom: this.rooms[currentRoom],
        });

        sendSignalToRoom('chat-message', {
          author: 'System',
          text: `${currentUser} присоединился к комнате`,
        });

        socket.on('disconnect', () => {
          sendSignalToRoom('chat-message', {
            author: 'System',
            text: `${currentUser} вышел из комнаты`,
          });

          // удаляем из объекта комнаты пользователя.
          this.rooms[currentRoom] = this.rooms[currentRoom].filter(user => user.userName !== currentUser);

          // отправляем новый объект активных пользователей
          sendSignalToRoom('update-online-count', {
            currentRoom: this.rooms[currentRoom],
          });
        });

        socket.on('new-message', (message) => {
          sendSignalToRoom('chat-message', message);
        })
      });
    });
  };
}

new Main();