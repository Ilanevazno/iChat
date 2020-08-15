import { connect } from 'react-redux';
import Index from './Index';
import { joinToTheRoom, setAuthStatus } from '../../store/actions';

const mapStateToProps = (state) => ({
  userName: state.main.userName,
  isAuthComplected: state.main.isAuthComplected,
  authStatus: state.main.authStatus,
  isFailedAuth: state.main.isFailedAuth,
});

const mapDispatchToProps = {
  joinToTheRoom,
  setAuthStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);