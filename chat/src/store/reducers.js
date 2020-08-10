import { combineReducers } from 'redux';
import messageSectionReducer from './messageSection/reducers';

export default combineReducers({
  messagesSection: messageSectionReducer,
});