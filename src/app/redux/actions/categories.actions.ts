import { createAction, props } from '@ngrx/store';

import { VideoItem } from 'src/app/shared/models/videos-item';

export const getSearchResults = createAction(
  'GET SEARCH RESULTS BY TEXT FRAGMENT',
  props<{ textFragment: string }>()
);

export const getVideoItemsSuccessful = createAction(
  'SET FETCHED VIDEO ITEMS',
  props<{ videoItems: VideoItem[] }>()
);

export const getVideoItemsFailed = createAction(
  'GET VIDEO ITEMS FAILED',
  props<{ error: Error }>()
);

export const getVideoItem = createAction(
  'GET VIDEO ITEM BY ID',
  props<{ id: string }>()
);

export const getVideoItemSuccessful = createAction(
  'SET FETCHED VIDEO ITEM',
  props<{ videoItem: VideoItem }>()
);

export const getVideoItemFailed = createAction(
  'GET VIDEO ITEM FAILED',
  props<{ error: Error }>()
);
