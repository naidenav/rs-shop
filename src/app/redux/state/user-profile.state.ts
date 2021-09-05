import { IUserProfile } from 'src/app/shared/models/user-profile.model';

export interface IUserProfileState extends IUserProfile {
  loading: boolean;
  isLogged: boolean;
}

export const initialUserProfileState: IUserProfileState = {
  loading: false,
  isLogged: false,
  firstName: '',
  lastName: '',
  token: '',
  login: '',
  password: '',
  cart: [],
  favorites: [],
  orders: [],
};
