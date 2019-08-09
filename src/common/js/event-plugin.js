export default {
  install(Vue, win) {
    Vue.prototype.$subscribe = (eventName, execFunc) => {
      if (typeof execFunc !== 'function') {
        throw new Error('Parameter execFunc is not function.');
      }
      if (!win.listerners) {
        win.listerners = [];
      }
      win.listerners.push({
        eventName,
        execFunc
      });
    };
    Vue.prototype.$publish = (eventName, ...params) => {
      const listerners = win.listerners;
      if (listerners && listerners.length > 0) {
        for (let listerner of listerners) {
          if (listerner.eventName === eventName) {
            listerner.execFunc(params);
          }
        }
      }
    };
  }
};
