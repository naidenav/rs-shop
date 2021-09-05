import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { IUserProfileState } from '../state/user-profile.state';

export const userProfileSelector = createFeatureSelector<
  AppState,
  IUserProfileState
>('userProfileState');

export const userInfo = createSelector(userProfileSelector, (state) => state);

export const token = createSelector(
  userProfileSelector,
  (state) => state.token
);

export const isLogged = createSelector(
  userProfileSelector,
  (state) => state.isLogged
);
