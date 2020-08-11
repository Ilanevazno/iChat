import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import MessageSectionContainer from '../../components/MessageSection/MessageSectionContainer';
import AuthSection from '../../components/AuthSection/AuthSection';

import { Layout } from 'antd';

const { Content, Footer } = Layout;

export default class Index extends React.Component {
  render() {
    return <Layout style={{ height: '100vh' }}>
      <PageHeader userName={this.props.userName} />
      <Content className="site-layout" style={{ marginTop: 64, background: 'white', height: '100%' }}>
        <div className="site-layout-background" style={{ padding: 24, height: '100%' }}>
        {
          this.props.isAuthComplected ? <MessageSectionContainer /> : <AuthSection joinToTheRoom={this.props.joinToTheRoom}/>
        }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Chat homework for Fora soft</Footer>
    </Layout>
  }
}