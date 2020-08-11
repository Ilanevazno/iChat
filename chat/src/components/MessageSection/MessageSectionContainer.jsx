import MessageSection from './MessageSection';
import { connect } from 'react-redux';
import { getMessageToState } from '../../store/messageSection/actions';


const mapStateToProps = (state) => {
  return {
    messages: state.messagesSection.messages,
  }
}

const mapDispatchToProps = {
  getMessageToState,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSection);