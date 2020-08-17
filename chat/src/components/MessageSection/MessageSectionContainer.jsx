import MessageSection from './MessageSection';
import { connect } from 'react-redux';
import { getMessageToState, updateRoomOnlineUsers, handleVideoCalling } from '../../store/messageSection/actions';


const mapStateToProps = (state) => {
  return {
    messages: state.messagesSection.messages,
    usersInTheRoom: state.messagesSection.usersInTheRoom,
    isVideoCallingNow: state.messagesSection.isVideoCallingNow,
    usersInTheCall: state.messagesSection.usersInTheCall,
    roomId: state.main.roomId,
    userName: state.main.userName,
  }
}

const mapDispatchToProps = {
  getMessageToState,
  updateRoomOnlineUsers,
  handleVideoCalling,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSection);