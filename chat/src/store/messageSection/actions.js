export const getAllMessages = dataFromServer => ({
  type: 'LOAD_MESSAGES',
  payload: [dataFromServer],
});