import React from 'react';
import { MessagesContainer } from './styled';
import NewMessageArea from '../NewMessageArea/NewMessageArea';
import Message from '../Message/Message';

export default class MessageSection extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <MessagesContainer>{this.props.messages.length
          ? this.props.messages.map(message => <Message author={ message.author } text={ message.text }>hello</Message>)
          : 'Нет сообщений'}</MessagesContainer>
        <NewMessageArea />
      </div>
    )
  }
}