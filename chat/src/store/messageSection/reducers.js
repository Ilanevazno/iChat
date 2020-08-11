const initialState = {
  messages: [
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, messages: action.payload };
    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state;
  }
}