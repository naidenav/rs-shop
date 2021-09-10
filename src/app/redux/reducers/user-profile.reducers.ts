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
    error: error.message,
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
  on(UserProfileActions.getUserInfoFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  })),
  on(UserProfileActions.setUserInfo, (state, { userInfo }) => ({
    ...state,
    ...userInfo,
    error: '',
  })),
  on(UserProfileActions.clearUserInfo, (state) => ({
    ...state,
    ...initialUserProfileState,
    isLogged: false,
  })),
  on(UserProfileActions.moveToBasket, (state, { goodsItemId }) => ({
    ...state,
    loading: true,
  })),
  on(UserProfileActions.addedToBasket, (state, { goodsItemId }) => ({
    ...state,
    loading: false,
    cart: [...state.cart, goodsItemId],
    error: '',
  })),
  on(UserProfileActions.moveToBasketFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  })),
  on(UserProfileActions.removeFromBasket, (state, { goodsItemId }) => ({
    ...state,
    loading: true,
  })),
  on(UserProfileActions.removedFromBasket, (state, { goodsItemId }) => ({
    ...state,
    loading: false,
    cart: state.cart.filter((id) => id !== goodsItemId),
    error: '',
  })),
  on(UserProfileActions.removeFromBasketFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  })),
  on(UserProfileActions.moveToFavorites, (state, { goodsItemId }) => ({
    ...state,
    loading: true,
  })),
  on(UserProfileActions.addedToFavorites, (state, { goodsItemId }) => ({
    ...state,
    loading: false,
    favorites: [...state.favorites, goodsItemId],
    error: '',
  })),
  on(UserProfileActions.moveToFavoritesFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  })),
  on(UserProfileActions.removeFromFavorites, (state, { goodsItemId }) => ({
    ...state,
    loading: true,
  })),
  on(UserProfileActions.removedFromFavorites, (state, { goodsItemId }) => ({
    ...state,
    loading: false,
    favorites: state.favorites.filter((id) => id !== goodsItemId),
    error: '',
  })),
  on(UserProfileActions.removeFromFavoritesFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  }))
);
