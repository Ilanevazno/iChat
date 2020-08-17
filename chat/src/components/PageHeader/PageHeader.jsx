import React from 'react';

import { Layout } from 'antd';

const { Header } = Layout;

export default class PageHeader extends React.Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      </Header>
    )
  }
}