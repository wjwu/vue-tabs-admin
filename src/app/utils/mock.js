export const mock = (resolveData, time = 3000, rejectData = null) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectData) {
        reject(rejectData);
      }
      else {
        resolve(resolveData);
      }
    }, time);
  });
};
