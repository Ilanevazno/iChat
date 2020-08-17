import MessageSection from './MessageSection';
import { connect } from 'react-redux';
import { getMessageToState, updateRoomOnlineUsers } from '../../store/messageSection/actions';


const mapStateToProps = (state) => {
  return {
    messages: state.messagesSection.messages,
    usersInTheRoom: state.messagesSection.usersInTheRoom,
    roomId: state.main.roomId,
    userName: state.main.userName,
  }
}

const mapDispatchToProps = {
  getMessageToState,
  updateRoomOnlineUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSection);