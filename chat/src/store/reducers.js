import { combineReducers } from 'redux';
import messageSectionReducer from './messageSection/reducers';

const initialState = {
  isAuthComplected: false,
  isFailedAuth: false,
  userName: '',
  roomId: '',
  authStatus: '',
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'JOIN_ROOM':
      return { ...state, roomId: action.payload.roomId, userName: action.payload.userName, isAuthComplected: true, };
    case 'SET_JOIN_STATUS':
      return {...state, isFailedAuth: action.payload.isFailedAuth, authStatus: action.payload.authStatus};
    default:
      return state;
  }
}

export default combineReducers({
  main: mainReducer,
  messagesSection: messageSectionReducer,
});