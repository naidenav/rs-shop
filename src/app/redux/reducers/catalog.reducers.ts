import { createReducer, on } from '@ngrx/store';

import * as CatalogActions from '../actions/catalog.actions';
import { initialCatalogState } from '../state/catalog.state';

export const catalogReducer = createReducer(
  initialCatalogState,
  on(CatalogActions.changeActiveCategory, (state, { category }) => ({
    ...state,
    activeCategory: category,
  })),
  on(CatalogActions.openCatalog, (state) => ({
    ...state,
    isCatalogOpened: true,
  })),
  on(CatalogActions.closeCatalog, (state) => ({
    ...state,
    isCatalogOpened: false,
  }))
);
