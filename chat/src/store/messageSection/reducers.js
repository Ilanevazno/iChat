import { NEW_MESSAGE, UPDATE_ROOM_ONLINE_USERS } from './constant';

const initialState = {
  usersInTheRoom: [],
  messages: [
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case UPDATE_ROOM_ONLINE_USERS:
      return { ...state, usersInTheRoom: action.payload.currentRoom };
    default:
      return state;
  }
}