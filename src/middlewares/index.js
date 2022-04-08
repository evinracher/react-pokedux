export const logAction = store => next => actionInfo => {
  console.log('dispatch: ', actionInfo);
  next(actionInfo);
};