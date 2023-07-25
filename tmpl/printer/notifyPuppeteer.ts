enum RenderStatus {
  end = 'end',
  pending = 'pending',
  error = 'error',
}

export const notifyRenderStatus = (status: RenderStatus, message) => {
  console.log('notifyRenderStatus', status, message);
  if (window.notifyRenderStatus) {
    window.notifyRenderStatus(status, message);
  }
};
