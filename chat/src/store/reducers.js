import { combineReducers } from 'redux';
import messageSectionReducer from './messageSection/reducers';
import authReducer from './authSection/reducers';

const initialState = {
  isAuthComplected: false,
  userName: '',
  roomId: '',
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'JOIN_ROOM':
      return { ...state, roomId: action.payload.roomId, userName: action.payload.userName, isAuthComplected: true, };
    default:
      return state;
  }
}

export default combineReducers({
  main: mainReducer,
  messagesSection: messageSectionReducer,
  auth: authReducer,
});