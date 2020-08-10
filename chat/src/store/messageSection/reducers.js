const initialState = {
  messages: [
    { author: 'test', text: 'hello', id: 1 },
    { author: 'test', text: 'how are u ?', id: 2 },
    { author: 'test', text: 'you here ?', id: 3 },
    { author: 'test', text: 'heey', id: 4 },
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