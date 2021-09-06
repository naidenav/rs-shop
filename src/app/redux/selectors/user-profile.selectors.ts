import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { IUserProfileState } from '../state/user-profile.state';

export const userProfileStateSelector = createFeatureSelector<
  AppState,
  IUserProfileState
>('userProfileState');

export const userInfoSelector = createSelector(
  userProfileStateSelector,
  (state) => state
);

export const tokenSelector = createSelector(
  userProfileStateSelector,
  (state) => state.token
);

export const isLoggedSelector = createSelector(
  userProfileStateSelector,
  (state) => state.isLogged
);

export const errorSelector = createSelector(
  userProfileStateSelector,
  (state) => state.error
);
