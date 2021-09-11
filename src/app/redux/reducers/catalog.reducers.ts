import { createReducer, on } from '@ngrx/store';

import * as CatalogActions from '../actions/catalog.actions';
import { initialCatalogState } from '../state/catalog.state';

export const catalogReducer = createReducer(
  initialCatalogState,
  on(CatalogActions.setSubCategoryName, (state, { name }) => ({
    ...state,
    subCategoryName: name,
  })),
  on(CatalogActions.getGoods, (state) => ({
    ...state,
    loading: true,
  })),
  on(CatalogActions.getMoreGoods, (state) => ({
    ...state,
    loading: true,
  })),
  on(CatalogActions.fetchedGoods, (state, { goods }) => ({
    ...state,
    loading: false,
    goods,
  })),
  on(CatalogActions.fetchedMoreGoods, (state, { goods }) => ({
    ...state,
    loading: false,
    goods: state.goods.concat(goods),
  })),
  on(CatalogActions.thereAreMoreGoods, (state) => ({
    ...state,
    areThereMoreGoods: true,
  })),
  on(CatalogActions.noMoreGoods, (state) => ({
    ...state,
    areThereMoreGoods: false,
  })),
  on(CatalogActions.getGoodsFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.message,
  })),
  on(CatalogActions.increasePaginationCoefficient, (state) => ({
    ...state,
    paginationCoefficient: state.paginationCoefficient + 1,
  })),
  on(CatalogActions.nullifyPaginationCoefficient, (state) => ({
    ...state,
    paginationCoefficient: 0,
  })),
  on(CatalogActions.setSortingDirection, (state, { direction }) => ({
    ...state,
    sortingDirection: direction,
  })),
  on(CatalogActions.setSortingCriterion, (state, { criterion }) => ({
    ...state,
    sortingCriterion: criterion,
  })),
  on(CatalogActions.resetSorting, (state) => ({
    ...state,
    sortingDirection: '',
    sortingCriterion: '',
  }))
);
