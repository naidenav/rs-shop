import { createAction, props } from '@ngrx/store';

export const changeActiveCategory = createAction(
  'CHANGE_ACTIVE_CATEGORY',
  props<{ category: string }>()
);

export const openCatalog = createAction('OPEN_CATALOG');

export const closeCatalog = createAction('CLOSE_CATALOG');
