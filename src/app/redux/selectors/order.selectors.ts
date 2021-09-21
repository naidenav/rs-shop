import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { IOrderState } from '../state/order.state';

export const orderStateSelector = createFeatureSelector<AppState, IOrderState>(
  'orderState'
);

export const orderItemsSelector = createSelector(
  orderStateSelector,
  (state) => state.items
);

export const orderDetailsSelector = createSelector(
  orderStateSelector,
  (state) => state.details
);
