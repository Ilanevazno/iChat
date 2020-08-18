import React from 'react';
import { Row, Col, Layout } from 'antd';
import shortid from 'shortid';
import { MessagesListContainer } from './styled';
import { socket } from '../../App';
import Message from '../Message/Message';
import RoomUsersData from '../RoomUsersData/RoomUsersData';
import NewMessageAreaContainer from '../NewMessageArea/NewMessageAreaContainer';

const { Content } = Layout;

const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  statsWrapper: {
    border: '1px solid gainsboro',
    borderBottomLeftRadius: '11px',
    borderTopLeftRadius: '11px',
    height: '100%',
    overflowY: 'scroll',
  },
  messagesWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
};

export default class MessageSection extends React.Component {
  constructor() {
    super();
    this.messagesContainer = React.createRef();
  }

  componentDidMount() {
    socket.on('chat-message', (message) => {
      // Изначально записываем сообщение в стейт, после чего магия редакса его отрисует.
      this.props.getMessageToState(message);

      // необходимо для того, чтобы во время получения новых сообщений, прокручивался скролл вниз.
      if (!this.props.isVideoCallingNow) this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight;
    });

    socket.on('update-online-count', (message) => {
      // При получении соответствующего эвента обновляем статистику пользователей онлайн.
      this.props.updateRoomOnlineUsers(message);
    })
  }

  render() {
    return (
      <Content style={{ height: '100%' }}>
        <Row style={styles.wrapper}>
          <Col span={0} lg={3} style={styles.statsWrapper}>
            <RoomUsersData usersInTheRoom={this.props.usersInTheRoom} />
          </Col>
          <Col span={24} lg={21} style={styles.messagesWrapper}>
            <MessagesListContainer ref={this.messagesContainer}>
              {this.props.messages.length
                ? this.props.messages.map(message =>
                  <Message key={message.id ? message.id : shortid.generate()} message={message}></Message>)
                : 'Нет сообщений'
              }
            </MessagesListContainer>
            <NewMessageAreaContainer />
          </Col>
        </Row>
      </Content>
    )
  }
}