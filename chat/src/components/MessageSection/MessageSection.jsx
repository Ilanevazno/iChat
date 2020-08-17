import React from 'react';
import { MessagesListContainer } from './styled';
import NewMessageAreaContainer from '../NewMessageArea/NewMessageAreaContainer';
import Message from '../Message/Message';
import RoomUsersData from '../RoomUsersData/RoomUsersData';
import { socket } from '../../App';
import { Row, Col, Layout, Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import VideoCalling from '../VideoCalling/VideoCalling';
import shortid from 'shortid';
import Peer from 'peerjs';

const { Content } = Layout;

const styles = {
  wrapper: { height: '93%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
  messagesTopMenu: {
    borderTop: '1px solid gainsboro',
    borderLeft: '1px solid gainsboro',
    borderRight: '1px solid gainsboro',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '0.5rem',
  },
  statsWrapper: {
    border: '1px solid gainsboro',
    borderBottomLeftRadius: '11px',
    height: '100%',
    overflowY: 'scroll',
  },
  messagesWrapper: { height: '100%', display: 'flex', flexDirection: 'column' },
};

export default class MessageSection extends React.Component {
  constructor() {
    super();
    this.messagesContainer = React.createRef();
  }

  componentDidMount() {
    socket.on('chat-message', (message) => {
      this.props.getMessageToState(message);

      if (!this.props.isVideoCallingNow) this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight;
    });

    socket.on('update-online-count', (message) => {
      this.props.updateRoomOnlineUsers(message);
    })

    socket.on('video-started', (stream, roomId) => {
      console.log('видео старт', stream, roomId);
    })
  }

  async handleVideoCall() {
    let stream = null;

    if (!this.props.isVideoCallingNow) {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
          .then(stream => {
            console.log('стрим', stream)
            socket.emit('request-video-calling', stream);
          });
      } catch (err) {
        console.log('При создании видеозвонка произошла ошибка', err);
      }
    } else {
      this.props.handleVideoCalling({ isVideoCallingNow: false });
    }
  }

  render() {
    return (
      <Content style={{ height: '100%' }}>
        <Row style={styles.messagesTopMenu}>
          <Button
            type="primary"
            shape="round"
            icon={<VideoCameraOutlined />}
            size={'large'}
            onClick={this.handleVideoCall.bind(this)}
          >
            {this.props.isVideoCallingNow ? 'Завершить видеозвонок' : 'Начать видеозвонок'}
          </Button>
        </Row>
        {
          !this.props.isVideoCallingNow
            ? <Row style={styles.wrapper}>
              <Col span={3} style={styles.statsWrapper}>
                <RoomUsersData usersInTheRoom={this.props.usersInTheRoom} />
              </Col>
              <Col span={21} style={styles.messagesWrapper}>
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
            : <VideoCalling usersInTheCall={this.props.usersInTheCall} />
        }
      </Content>
    )
  }
}