import { createAction, props } from '@ngrx/store';

import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IQueryParams } from 'src/app/shared/models/query-params.model';

export const setSubCategoryName = createAction(
  'SET_SUBCATEGORY_NAME',
  props<{ name: string }>()
);

export const getGoods = createAction(
  'GET_GOODS',
  props<{
    categoryId: string;
    subCategoryId: string;
    queryParams: IQueryParams[];
  }>()
);

export const fetchedGoods = createAction(
  'FETCHED_GOODS',
  props<{ goods: IGoodsItem[] }>()
);

export const checkMoreGoods = createAction(
  'CHECK_MORE_GOODS',
  props<{
    categoryId: string;
    subCategoryId: string;
    queryParams: IQueryParams[];
  }>()
);

export const thereAreMoreGoods = createAction('THERE_ARE_MORE_GOODS');

export const noMoreGoods = createAction('NO_MORE_GOODS');

export const getMoreGoods = createAction(
  'GET_MORE_GOODS',
  props<{
    categoryId: string;
    subCategoryId: string;
    queryParams: IQueryParams[];
  }>()
);

export const fetchedMoreGoods = createAction(
  'FETCHED_MORE_GOODS',
  props<{ goods: IGoodsItem[] }>()
);

export const getGoodsFailed = createAction(
  'GET_GOODS_FAILED',
  props<{ error: Error }>()
);

export const increasePaginationCoefficient = createAction(
  'INCREASE_PAGINATIONCOEFFICIENT'
);

export const nullifyPaginationCoefficient = createAction(
  'NULLIFY_PAGINATIONCOEFFICIENT'
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
