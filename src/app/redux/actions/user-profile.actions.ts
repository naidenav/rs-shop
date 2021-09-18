import { createAction, props } from '@ngrx/store';

import { IOrder, IUserProfile } from 'src/app/shared/models/user-profile.model';

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

export const openLoginModal = createAction('OPEN_LOGIN_MODAL');

export const closeLoginModal = createAction('CLOSE_LOGIN_MODAL');

export const getUserInfo = createAction(
  'GET_USER_INFO',
  props<{ token: string }>()
);

export const fetchedUserInfo = createAction(
  'FETCHED_USER_INFO',
  props<{ userInfo: IUserProfile }>()
);

export const userInfoSaved = createAction('USER_INFO_SAVED');

export const getUserInfoFailed = createAction(
  'GET_USER_INFO_FAILED',
  props<{ error: Error }>()
);

export const setUserInfo = createAction(
  'SET_USER_INFO',
  props<{ userInfo: IUserProfile }>()
);

export const clearUserInfo = createAction('CLEAR_USER_INFO');

export const moveToBasket = createAction(
  'MOVE_TO_BASKET',
  props<{ goodsItemId: string }>()
);

export const addedToBasket = createAction(
  'ADDED_TO_BASKET',
  props<{ goodsItemId: string }>()
);

export const moveToBasketFailed = createAction(
  'MOVE_TO_BASKET_FAILED',
  props<{ error: Error }>()
);

export const removeFromBasket = createAction(
  'REMOVE_FROM_BASKET',
  props<{ goodsItemId: string }>()
);

export const removedFromBasket = createAction(
  'REMOVED_FROM_BASKET',
  props<{ goodsItemId: string }>()
);

export const removeFromBasketFailed = createAction(
  'REMOVE_FROM_BASKET_FAILED',
  props<{ error: Error }>()
);

export const moveToFavorites = createAction(
  'MOVE_TO_FAVORITES',
  props<{ goodsItemId: string }>()
);

export const addedToFavorites = createAction(
  'ADDED_TO_FAVORITES',
  props<{ goodsItemId: string }>()
);

export const moveToFavoritesFailed = createAction(
  'MOVE_TO_FAVORITES_FAILED',
  props<{ error: Error }>()
);

export const removeFromFavorites = createAction(
  'REMOVE_FROM_FAVORITES',
  props<{ goodsItemId: string }>()
);

export const removedFromFavorites = createAction(
  'REMOVED_FROM_FAVORITES',
  props<{ goodsItemId: string }>()
);

export const removeFromFavoritesFailed = createAction(
  'REMOVE_FROM_FAVORITES_FAILED',
  props<{ error: Error }>()
);

export const clearBasket = createAction(
  'CLEAR_BASKET',
  props<{ goodsItemsId: string[] }>()
);

export const updateOrderList = createAction(
  'UPDATE_ORDER_LIST',
  props<{ order: IOrder }>()
);

export const deleteOrder = createAction(
  'DELETE_ORDER_BY_ID',
  props<{ id: string }>()
);

export const orderDeleted = createAction(
  'ORDER_DELETED',
  props<{ id: string }>()
);

export const deleteOrderFailed = createAction(
  'DELETE_ORDER_FAILED',
  props<{ error: Error }>()
);
