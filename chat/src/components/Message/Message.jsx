import React from 'react';
import { Card } from 'antd';

export default class Message extends React.Component {
  render() {
    return (
      <Card
        title={`${this.props.message.author} ${this.props.message.time ? this.props.message.time : ''}`}
        type="inner"
        style={{ marginBottom: 25, }}
      >
        {this.props.message.text}
      </Card>
    );
  }
}