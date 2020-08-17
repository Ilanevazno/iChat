import React from 'react';
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Wrapper } from './styled';
import shortid from 'shortid';
import moment from 'moment';

export default class NewMessageArea extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldTextCurrent: '',
    }
  }

  onSendMessage(e) {
    e.preventDefault();

    window.moment = moment;

    this.props.sendNewMessage({
      id: shortid.generate(),
      author: this.props.userName,
      text: this.state.fieldTextCurrent,
      roomId: this.props.roomId,
      date: moment().format('MM-DD-YYYY HH:mm'),
      time: moment().format('HH:mm'),
    });

    this.setState((state, props) => {
      return { fieldTextCurrent: '' };
    });
  }

  changeTextInputText(e) {
    const newValue = e.target.value;

    this.setState((state, props) => {
      return { fieldTextCurrent: newValue };
    });
  }

  render() {
    return (
      <Wrapper>
        <form style={{ display: 'flex' }} onSubmit={this.onSendMessage.bind(this)}>
          <Input placeholder="Введите текст" value={this.state.fieldTextCurrent} onChange={this.changeTextInputText.bind(this)} />
          <Button
            style={{ display: 'flex', alignItems: 'center' }}
            type="primary"
            onClick={this.onSendMessage.bind(this)}
          >Отправить
          <SendOutlined />
          </Button>
        </form>
      </Wrapper>
    )
  }
}