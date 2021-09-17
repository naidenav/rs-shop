import { createReducer, on } from '@ngrx/store';

import * as OrderActions from '../actions/order.actions';
import { initialOrderState } from '../state/order.state';

export const orderReducer = createReducer(
  initialOrderState,
  on(OrderActions.setDefaultOrder, (state) => ({
    ...state,
    ...initialOrderState,
  })),
  on(OrderActions.setDefaultDetails, (state, { details }) => ({
    ...state,
    details,
  })),
  on(OrderActions.addItemToOrder, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(OrderActions.createOrder, (state, { order }) => ({
    ...state,
    loading: true,
  })),
  on(OrderActions.createOrder, (state, { order }) => ({
    ...state,
    loading: true,
  })),
  on(OrderActions.orderCreated, (state, { order }) => ({
    ...state,
    loading: false,
  })),
  on(OrderActions.createOrderFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  })),
  on(OrderActions.putGoodsToOrder, (state, { goods }) => ({
    ...state,
    items: [...goods],
  })),
  on(OrderActions.changeAmount, (state, { id, amount }) => ({
    ...state,
    items: state.items.map((item) => (item.id === id ? { id, amount } : item)),
  })),
  on(OrderActions.deleteOrderItem, (state, { id }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  }))
);
