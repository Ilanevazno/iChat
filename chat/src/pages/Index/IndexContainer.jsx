import { connect } from 'react-redux';
import Index from './Index';
import { joinToTheRoom } from '../../store/actions';

const mapStateToProps = (state) => ({
  userName: state.main.userName,
  isAuthComplected: state.main.isAuthComplected,
});

const mapDispatchToProps = {
  joinToTheRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);