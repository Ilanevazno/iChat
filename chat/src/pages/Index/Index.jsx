import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import MessageSectionContainer from '../../components/MessageSection/MessageSectionContainer';
import AuthSectionContainer from '../../components/AuthSection/AuthSectionContainer';

import { Layout } from 'antd';

const { Content, Footer } = Layout;
const styles = {
  mainContent: {
    marginTop: 64,
    background: 'white',
    height: '100%',
  },
  backgroundLayout: {
    padding: 24,
    height: '100%',
  },
};

export default class Index extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <PageHeader userName={this.props.userName} />
        <Content className="site-layout" style={styles.mainContent}>
          <div className="site-layout-background" style={styles.backgroundLayout}>
            {
              this.props.isAuthComplected
                ? <MessageSectionContainer />
                : <AuthSectionContainer/>
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Chat homework for Fora soft</Footer>
      </Layout>)
  }
}