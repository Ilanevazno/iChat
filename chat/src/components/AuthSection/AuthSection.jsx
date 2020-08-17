import React from 'react';
import { Modal, Button, Input, Form } from 'antd';
import shortid from 'shortid';

export default class AuthSection extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldTextCurrent: '',
    }
  }

  changeTextInputText(e) {
    const newValue = e.target.value;

    this.setState(() => {
      return { fieldTextCurrent: newValue };
    });
  }

  registerUser() {
    const isFormReady = this.validateForm();
    // Была идея сделать либо через window.location.hash, либо так.
    // данное решение показалось более красивым, т.к для входа в комнату
    // у нас будет просто URL вида http://host.ru/testRoom
    const roomId = window.location.pathname.replace('/', '');

    if (isFormReady) {
      this.props.joinToTheRoom({
        userName: this.state.fieldTextCurrent,
        roomId: roomId ? roomId : shortid.generate(),
      });
    }
  }

  validateForm() {
    if (this.state.fieldTextCurrent === '') {
      this.props.setAuthStatus({
        isAuthComplected: false,
        authStatus: 'Поле не может быть пустым',
      });
    } else {
      return true;
    }
  }

  render() {
    return (
      <Form>
        <Modal
          title="Вход"
          centered
          visible
          footer={[
            <Button key="submit" type="primary" onClick={this.registerUser.bind(this)}>
              Войти
            </Button>
          ]}
        >
          <p>Придумайте никнейм</p>
          <Form.Item validateStatus={!!this.props.authStatus && "error"} help={!!this.props.authStatus && this.props.authStatus}>
            <Input placeholder="Введите текст" value={this.state.fieldTextCurrent} onChange={this.changeTextInputText.bind(this)} />
          </Form.Item>
        </Modal>
      </Form>
    )
  }
}