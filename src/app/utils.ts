import { IUserProfile } from './shared/models/user-profile.model';

export const getUserInfoFromLocalStorage = (): IUserProfile => {
  const info = localStorage.getItem('userInfo');
  return info ? JSON.parse(info) : undefined;
};

export const setUserInfoToLocalStorage = (userInfo: IUserProfile): void => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};
