import { createReducer, on } from '@ngrx/store';

import * as UserProfileActions from '../actions/user-profile.actions';
import { initialUserProfileState } from '../state/user-profile.state';

export const userProfileReducer = createReducer(
  initialUserProfileState,
  on(UserProfileActions.setToken, (state, { token }) => ({
    ...state,
    token,
  })),
  on(UserProfileActions.registerUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserProfileActions.registrationSuccessful, (state, { token }) => ({
    ...state,
    token,
    loading: false,
  })),
  on(UserProfileActions.registrationFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserProfileActions.getUserInfo, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserProfileActions.fetchedUserInfo, (state, { userInfo }) => ({
    ...state,
    ...userInfo,
    loading: false,
    isLogged: true,
  })),
  on(UserProfileActions.setUserInfo, (state, { userInfo }) => ({
    ...state,
    ...userInfo,
  })),
  on(UserProfileActions.clearUserInfo, (state) => ({
    ...state,
    ...initialUserProfileState,
    isLogged: false,
  }))
);
