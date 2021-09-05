import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { ICategoriesState } from '../state/categories.state';

export const categoriesSelector = createFeatureSelector<
  AppState,
  ICategoriesState
>('categoriesState');

export const categories = createSelector(
  categoriesSelector,
  (state) => state.categories
);
