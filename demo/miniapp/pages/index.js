let listeners = [];

Page({
  data: {
    addReachBottomListener(callback) {
      listeners.push(callback);
    },
    removeReachBottomListener(callback) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners = [
          ...listeners.slice(0, index),
          ...listeners.slice(index + 1),
        ];
      }
    },
  },
  onLoad() {},
  onShow() {},
  onReachBottom(evt) {
    if (!listeners) return;
    listeners.forEach((cb) => {
      cb(evt);
    });
  },
});
