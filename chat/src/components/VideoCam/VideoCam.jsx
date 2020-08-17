import React, { useRef, createRef } from 'react';

export default class VideoCam extends React.Component {
  constructor() {
    super();

    this.videoPlayer = createRef(null);
  }

  loadVideoPlayer() {
    const videoPlayer = this.videoPlayer.current;

    videoPlayer.srcObject = this.props.mediaStream;

    videoPlayer.onloadedmetadata = (e) => {
      console.log('video is loaded', this.props.mediaStream);

      videoPlayer.play();
    }
  }

  componentDidMount() {
    this.loadVideoPlayer();
  }

  render() {
    return (
      <video ref={this.videoPlayer} />
    )
  }
}