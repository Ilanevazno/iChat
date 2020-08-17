import React from 'react';
import io from 'socket.io-client';
import IndexContainer from './pages/Index/IndexContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import './App.css';

const store = createStore(rootReducer, applyMiddleware(
  thunk
));

export const socket = io('http://localhost:3010/');

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <IndexContainer />
      </Provider>
    </div>
  );
}

export default App;
