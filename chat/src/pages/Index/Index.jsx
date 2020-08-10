import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import MessageSectionContainer from '../../components/MessageSection/MessageSectionContainer';

import { Layout } from 'antd';

const { Content, Footer } = Layout;

export default class Index extends React.Component {
  render() {
    return <Layout style={{ height: '100vh' }}>
      <PageHeader />
      <Content className="site-layout" style={{ padding: '0 2.5rem', marginTop: 64, background: 'white' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <MessageSectionContainer />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Chat homework for Fora soft</Footer>
    </Layout>
  }
}