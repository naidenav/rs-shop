import { createAction, props } from '@ngrx/store';

import { IUserProfile } from 'src/app/shared/models/user-profile.model';

export const register = createAction(
  'REGISTER',
  props<{
    firstName: string;
    lastName: string;
    login: string;
    password: string;
  }>()
);

export const registerSuccess = createAction(
  'REGISTER_SUCCESS',
  props<{ token: string }>()
);

export const registerFalied = createAction(
  'REGISTER_FAILED',
  props<{ error: Error }>()
);

export const login = createAction(
  'LOGIN',
  props<{ login: string; password: string }>()
);

export const loginSuccess = createAction(
  'LOGIN_SUCCESS',
  props<{ userInfo: IUserProfile }>()
);

export const loginFalied = createAction(
  'LOGIN_FAILED',
  props<{ error: Error }>()
);
