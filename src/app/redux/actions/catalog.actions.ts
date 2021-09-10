import { createAction, props } from '@ngrx/store';

import { IGoodsItem } from 'src/app/shared/models/goods.model';

export const setSubCategoryName = createAction(
  'SET_SUBCATEGORY_NAME',
  props<{ name: string }>()
);

export const getGoods = createAction(
  'GET_GOODS',
  props<{ categoryId: string; subCategoryId: string }>()
);

export const fetchedGoods = createAction(
  'FETCHED_GOODS',
  props<{ goods: IGoodsItem[] }>()
);

export const getGoodsFailed = createAction(
  'GET_GOODS_FAILED',
  props<{ error: Error }>()
);

export const setSortingDirection = createAction(
  'SET_SORTING_DIRECTION',
  props<{ direction: string }>()
);

export const setSortingCriterion = createAction(
  'SET_SORTING_CRITERION',
  props<{ criterion: string }>()
);

export const resetSorting = createAction('RESET_SORTING');
