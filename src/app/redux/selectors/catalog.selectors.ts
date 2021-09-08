import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { ICatalogState } from '../state/catalog.state';

export const catalogStateSelector = createFeatureSelector<
  AppState,
  ICatalogState
>('catalogState');

export const subCategoryNameSelector = createSelector(
  catalogStateSelector,
  (state) => state.subCategoryName
);

export const goodsSelector = createSelector(
  catalogStateSelector,
  (state) => state.goods
);

export const catalogLoadingSelector = createSelector(
  catalogStateSelector,
  (state) => state.loading
);

export const catalogErrorSelector = createSelector(
  catalogStateSelector,
  (state) => state.error
);
