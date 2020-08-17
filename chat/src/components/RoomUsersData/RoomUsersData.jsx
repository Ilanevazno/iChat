import React from 'react';
import { Typography } from 'antd';
import { StatusContainer } from './styled';

const { Text } = Typography;


export default class RoomUsersData extends React.Component {
  render() {
    return (
      <StatusContainer>
        <Text>Пользователей онлайн: {this.props.usersInTheRoom.length}</Text>
        {this.props.usersInTheRoom.map((data, index) => <Text strong key={index}>{data.userName}</Text>)}
      </StatusContainer>
    );
  }
}