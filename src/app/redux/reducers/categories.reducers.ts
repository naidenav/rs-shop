import { createReducer, on } from '@ngrx/store';

import * as YoutubeActions from '../actions/categories.actions';
import { initialYoutubeState } from '../state/categories.state';

export const youtubeReducer = createReducer(
  initialYoutubeState,
  on(YoutubeActions.getSearchResults, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(YoutubeActions.getVideoItemsSuccessful, (state, { videoItems }) => ({
    ...state,
    loading: false,
    loaded: true,
    searchResults: videoItems,
  })),
  on(YoutubeActions.getVideoItemsFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(YoutubeActions.getVideoItem, (state) => ({ ...state, loading: true })),
  on(YoutubeActions.getVideoItemSuccessful, (state, { videoItem }) => ({
    ...state,
    loading: false,
    loaded: true,
    currentVideo: videoItem,
  })),
  on(YoutubeActions.getVideoItemFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
