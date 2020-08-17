import { socket } from "../../App";

export const getMessageToState = data => ({
  type: 'NEW_MESSAGE',
  payload: data,
});

export const updateRoomOnlineUsers = data => ({
  type: 'UPDATE_ROOM_ONLINE_USERS',
  payload: data,
});

export const handleVideoCalling = data => ({
  type: 'HANDLE_VIDEO_CALLING',
  payload: data,
});

export const sendNewMessage = data => (dispatch, getState) => {
  socket.emit('new-message', data);
}