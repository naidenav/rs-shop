import { createAction, props } from '@ngrx/store';

import { ICategory } from 'src/app/shared/models/categories.model';

export const getCategories = createAction('GET_CATEGORIES');

export const fetchedCategories = createAction(
  'FETCHED_CATEGORIES',
  props<{ categories: ICategory[] }>()
);

export const getCategoriesFailed = createAction(
  'GET_CATEGORIES_FAILED',
  props<{ error: Error }>()
);
