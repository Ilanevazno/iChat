import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import io from 'socket.io-client';
import Index from './pages/Index/Index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

function App() {
  const [messages, setMessageList] = useState([
    { name: 'test', text: 'hello' },
    { name: 'test', text: 'world' },
  ]);
  const socket = io('http://localhost:3010/');

  socket.on('chat-message', (message) => {
    setMessageList([
      ...messages,
      { name: 'test', text: message },
    ]);
  })


  return (
    <div className="App">
      <Provider store={store}>
        <Index />
        {/* <input onChange={(e) => {
        socket.emit('new-message', e.target.value);
      }} />
      {messages.map(message => <Message>{message.text}</Message>)} */}
      </Provider>
    </div>
  );
}

export default App;
