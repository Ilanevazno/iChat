import React from 'react';
import { Input } from 'antd';
import { Wrapper } from './styled';

export default class NewMessageArea extends React.Component {
  render() {
    return (
      <Wrapper>
        <form>
          <Input placeholder="Basic usage" />
        </form>
      </Wrapper>
    )
  }
}