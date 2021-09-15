import { createAction, props } from '@ngrx/store';

import { IOrderDetailes, IOrderItem } from 'src/app/shared/models/user-profile.model';

export const setDefaultOrder = createAction('SET_DEFAULT_ORDER');

export const setDefaultDetails = createAction(
  'SET_DEFAULT_DETAILS',
  props<{ details: IOrderDetailes }>()
);

export const addItemToOrder = createAction(
  'ADD_ITEM_TO_ORDER',
  props<{ item: IOrderItem }>()
);

export const putGoodsToOrder = createAction(
  'PUT_GOODS_TO_ORDER',
  props<{ goods: IOrderItem[] }>()
);

export const changeAmount = createAction(
  'CHANGE_AMOUNT',
  props<{ id: string; amount: number }>()
);

export const deleteOrderItem = createAction(
  'DELETE_ORDER_ITEM',
  props<{ id: string }>()
);
