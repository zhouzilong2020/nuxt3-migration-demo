export const beforeEach = (to, from, next) => {
  console.log(from.fullPath, "--->", to.fullPath);
  next();
};
