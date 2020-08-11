import { socket } from "../../App";

export const getAllMessages = dataFromServer => ({
  type: 'LISTEN_SERVER',
  payload: [dataFromServer],
});

export const getMessageToState = data => ({
  type: 'NEW_MESSAGE',
  payload: { author: data.author, text: data.text, id: data.id },
});

export const sendNewMessage = data => (dispatch, getState) => {
  socket.emit('new-message', { author: data.author, text: data.text, id: data.id, roomId: data.roomId });

  // dispatch(getMessageToState(data));
}