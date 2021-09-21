import { IUserProfile } from 'src/app/shared/models/user-profile.model';

export interface IUserProfileState extends IUserProfile {
  loading: boolean;
  isLogged: boolean;
  error: string;
  loginModalOpened: boolean;
}

export const initialUserProfileState: IUserProfileState = {
  loading: false,
  isLogged: false,
  error: '',
  loginModalOpened: false,
  firstName: '',
  lastName: '',
  token: '',
  login: '',
  password: '',
  cart: [],
  favorites: [],
  orders: [],
};
