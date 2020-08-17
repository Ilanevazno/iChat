import React from 'react';
import { VideoCallingContainer } from './styled';
import VideoCam from '../VideoCam/VideoCam';

export default class VideoCalling extends React.Component {
  render() {
    return (
      <VideoCallingContainer>
        {this.props.usersInTheCall.map(user => <VideoCam key={user.id} mediaStream={user} />)}
      </VideoCallingContainer>
    );
  }
}