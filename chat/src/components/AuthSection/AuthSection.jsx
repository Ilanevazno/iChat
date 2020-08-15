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
        isFailedAuth: true,
        authStatus: 'Поле не может быть пустым',
      });
    } else {
      // this.registerUser();
      // this.props.setAuthStatus({
      //   isFailedAuth: false,
      // });
      return true;
    }

    this.setState(() => ({
      // isFailedValidate,
    }));

    // return !isFailedValidate;
  }

  render() {
    return (
      <Form>
        <Modal
          title="Вход"
          centered
          visible
          onOk={() => this.setModal2Visible(false)}
          footer={[
            <Button key="submit" type="primary" onClick={this.registerUser.bind(this)}>
              Войти
            </Button>
          ]}
        >
          <p>Придумайте никнейм</p>
          <Form.Item validateStatus={this.props.isFailedAuth && "error"} help={this.props.isFailedAuth && this.props.authStatus}>
            <Input placeholder="Введите текст" value={this.state.fieldTextCurrent} onChange={this.changeTextInputText.bind(this)} />
          </Form.Item>
        </Modal>
      </Form>
    )
  }
}