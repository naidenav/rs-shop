import { createReducer, on } from '@ngrx/store';

import * as CategoriesActions from '../actions/categories.actions';
import { initialCategoriesState } from '../state/categories.state';

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesActions.getCategories, (state) => ({
    ...state,
    loading: true,
  })),
  on(CategoriesActions.fetchedCategories, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
  })),
  on(CategoriesActions.getCategoriesFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CategoriesActions.changeActiveCategory, (state, { category }) => ({
    ...state,
    activeCategory: category,
  })),
  on(CategoriesActions.openCategoriesPanel, (state) => ({
    ...state,
    isCatalogOpened: true,
  })),
  on(CategoriesActions.closeCategoriesPanel, (state) => ({
    ...state,
    isCatalogOpened: false,
  }))
);
