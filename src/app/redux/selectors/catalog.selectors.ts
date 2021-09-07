import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { ICatalogState } from '../state/catalog.state';

export const catalogStateSelector = createFeatureSelector<
  AppState,
  ICatalogState
>('catalogState');

export const isCatalogOpenSelector = createSelector(
  catalogStateSelector,
  (state) => state.isCatalogOpened
);

export const activeCategorySelector = createSelector(
  catalogStateSelector,
  (state) => state.activeCategory
);
