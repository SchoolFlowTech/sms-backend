export const success = (message, data) => ({
  status: "success",
  message,
  data,
});

export const failed = (message) => ({
  status: "failed",
  message,
  data: null,
});
