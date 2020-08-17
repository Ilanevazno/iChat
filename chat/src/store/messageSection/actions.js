import { socket } from "../../App";
import { NEW_MESSAGE, UPDATE_ROOM_ONLINE_USERS } from './constant';

const recordMessageInState = data => ({
  type: NEW_MESSAGE,
  payload: data,
});

const startUpdateUsers = data => ({
  type: UPDATE_ROOM_ONLINE_USERS,
  payload: data,
});

export const getMessageToState = data => async (dispatch) => {
  dispatch(recordMessageInState(data));
}

export const updateRoomOnlineUsers = data => async (dispatch) => {
  dispatch(startUpdateUsers(data));
}

export const sendNewMessage = data => async () => {
  socket.emit('new-message', data);
}