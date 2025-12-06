export const success = (message, data = null) => ({
  status: 'success',
  message,
  data,
});

export const failed = (message) => ({
  status: 'failed',
  message,
});
