import { START, LOADING } from './action_type';

export const loadingAction = () => {
  return new Promise(resolve => {
    resolve({
      type: LOADING
    });
  });
};
