import React from 'react';
import { Card } from 'antd';

export default class Message extends React.Component {
  render() {
    return (
      <Card title={this.props.author} type="inner" style={{ marginTop: 25, marginBottom: 25, }}>
        {this.props.text}
      </Card>
    );
  }
}