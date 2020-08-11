import { connect } from 'react-redux';
import NewMessageArea from './NewMessageArea';
import { sendNewMessage } from '../../store/messageSection/actions';

const mapStateToProps = (state) => ({
  userName: state.main.userName,
  roomId: state.main.roomId,
});

const mapDispatchToProps = {
  sendNewMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageArea);