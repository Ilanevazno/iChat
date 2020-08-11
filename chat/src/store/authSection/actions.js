// import { socket } from "../../App";
// import axios from 'axios';

// const setJoinedRoom = (roomId) => ({
//   type: 'JOIN_ROOM',
//   payload: roomId,
// });

// export const joinToTheRoom = data => async (dispatch) => {
//   return await axios.post('http://localhost:3013/users', {
//     userName: data.userName,
//     roomId: data.roomId,
//   }).then(response => {
//     if (response.data.type === 'success') {
//       socket
//       .emit('new-user', data.userName);
//       dispatch(setJoinedRoom(data.roomId));
//     }
//   })

//   // socket.on('response-room-id', data => {
//   //   dispatch(setJoinedRoom(data.roomId));

//   //   console.log(data);

//   //   return data.message;
//   // });
// }