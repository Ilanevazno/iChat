import React from 'react';
import { MessagesContainer } from './styled';
import NewMessageAreaContainer from '../NewMessageArea/NewMessageAreaContainer';
import Message from '../Message/Message';
import { socket } from '../../App';

export default class MessageSection extends React.Component {
  componentDidMount() {
    socket.on('chat-message', (message) => {
      this.props.getMessageToState(message);
    });
  }

  render() {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <MessagesContainer>
          {this.props.messages.length
            ? this.props.messages.map(message => <Message key={message.id} author={message.author} text={message.text}></Message>)
            : 'Нет сообщений'
          }
        </MessagesContainer>
        <NewMessageAreaContainer />
      </div>
    )
  }
}