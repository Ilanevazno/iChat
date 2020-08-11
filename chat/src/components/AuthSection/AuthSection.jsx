import React from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { socket } from '../../App';

export default class AuthSection extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldTextCurrent: '',
      isFailedValidate: false,
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
        roomId,
      });
    }
  }

  validateForm() {
    let isFailedValidate = false;

    if (this.state.fieldTextCurrent === '') {
      isFailedValidate = true;
    } else {
      isFailedValidate = false;
    }

    this.setState(() => ({
      isFailedValidate,
    }));

    return !isFailedValidate;
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
          <Form.Item validateStatus={this.state.isFailedValidate && "error"} help={this.state.isFailedValidate && "Поле не должно быть пустым"}>
            <Input placeholder="Введите текст" value={this.state.fieldTextCurrent} onChange={this.changeTextInputText.bind(this)} />
          </Form.Item>
        </Modal>
      </Form>
    )
  }
}