export default {
  setString(key, value) {
    window.sessionStorage.setItem(key, value);
  },
  getString(key) {
    return window.sessionStorage.getItem(key);
  },
  setObject(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  getObject(key) {
    const str = window.sessionStorage.getItem(key);
    if (str) {
      return JSON.parse(str);
    }
    return null;
  },
  clear() {
    window.sessionStorage.clear();
  }
};
