import { createAction, props } from '@ngrx/store';

import { IUserProfile } from 'src/app/shared/models/user-profile.model';

export const setToken = createAction('SET_TOKEN', props<{ token: string }>());

export const registerUser = createAction(
  'REGISTER_USER',
  props<{
    firstName: string;
    lastName: string;
    login: string;
    password: string;
  }>()
);

export const registrationSuccessful = createAction(
  'REGISTRATION_SUCCESSFUL',
  props<{ token: string }>()
);

export const registrationFailed = createAction(
  'REGISTRATION_FAILED',
  props<{ error: Error }>()
);

export const loginUser = createAction(
  'LOGIN_USER',
  props<{ login: string; password: string }>()
);

export const loginSuccessful = createAction(
  'LOGIN_SUCCESSFUL',
  props<{ token: string }>()
);

export const loginFalied = createAction(
  'LOGIN_FAILED',
  props<{ error: Error }>()
);

export const getUserInfo = createAction(
  'GET_USER_INFO',
  props<{ token: string }>()
);

export const fetchedUserInfo = createAction(
  'FETCHED_USER_INFO',
  props<{ userInfo: IUserProfile }>()
);

export const getUserInfoFailed = createAction(
  'GET_USER_INFO_FAILED',
  props<{ error: Error }>()
);

export const setUserInfo = createAction(
  'SET_USER_INFO',
  props<{ userInfo: IUserProfile }>()
);

export const clearUserInfo = createAction('CLEAR_USER_INFO');
