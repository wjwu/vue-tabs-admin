export const mockPromise = (mockData, time = 3000) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
  return p;
};
