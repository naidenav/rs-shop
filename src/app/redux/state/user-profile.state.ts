import { IUserProfile } from 'src/app/shared/models/user-profile.model';

export interface IUserProfileState extends IUserProfile {}

export const initialUserProfileState: IUserProfileState = {
  firstName: '',
  lastName: '',
  token: '',
  login: '',
  password: '',
  cart: [],
  favorites: [],
  orders: [],
};
