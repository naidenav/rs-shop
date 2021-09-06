import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { ICategoriesState } from '../state/categories.state';

export const categoriesStateSelector = createFeatureSelector<
  AppState,
  ICategoriesState
>('categoriesState');

export const categoriesSelector = createSelector(
  categoriesStateSelector,
  (state) => state.categories
);
