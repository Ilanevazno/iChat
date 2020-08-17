import axios from 'axios';
import { JOIN_ROOM, SET_JOIN_STATUS } from './constant';
import { socket } from "../App";

const setJoinedRoom = (data) => ({
  type: JOIN_ROOM,
  payload: data,
});

export const setAuthStatus = (data) => ({
  type: SET_JOIN_STATUS,
  payload: data,
});

export const joinToTheRoom = data => async (dispatch) => {
  return await axios.post('http://localhost:3010/users', {
    userName: data.userName,
    roomId: data.roomId,
  }).then(response => {
    if (response.data.type === 'success') {
      socket
      .emit('join-room', data);
      dispatch(setJoinedRoom({
        userName: data.userName,
        roomId: data.roomId,
      }));
    } else {
      dispatch(setAuthStatus({
        isAuthComplected: false,
        authStatus: response.data.message
      }));
    }
  })
}