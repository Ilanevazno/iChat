const initialState = {
  usersInTheRoom: [],
  messages: [
  ],
  isVideoCallingNow: false,
  usersInTheCall: [],
  stream: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, messages: action.payload };
    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'UPDATE_ROOM_ONLINE_USERS':
      return { ...state, usersInTheRoom: action.payload.currentRoom };
    case 'HANDLE_VIDEO_CALLING':
      return {
        ...state,
        isVideoCallingNow: action.payload.isVideoCallingNow,
        stream: action.payload.stream,
        // currentUser: action.payload.isVideoCallingNow ? action.payload.usersInTheCall : [],
      };
    default:
      return state;
  }
}