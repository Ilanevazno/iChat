import { connect } from 'react-redux';
import { joinToTheRoom, setAuthStatus } from '../../store/actions';
import AuthSection from './AuthSection';

const mapStateToProps = (state) => ({
  authStatus: state.main.authStatus,
  isAuthComplected: state.main.isAuthComplected,
})

const mapDispatchToProps = {
  joinToTheRoom,
  setAuthStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSection);