import MessageSection from './MessageSection';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messages: state.messagesSection.messages,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSection);