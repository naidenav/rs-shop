import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { YoutubeState } from '../state/categories.state';

export const youtubeSelector = createFeatureSelector<AppState, YoutubeState>(
  'youtubeState'
);

export const searchResults = createSelector(
  youtubeSelector,
  (youtubeState) => youtubeState.searchResults
);

export const youtubeLoading = createSelector(
  youtubeSelector,
  (youtubeState) => youtubeState.loading
);

export const youtubeError = createSelector(
  youtubeSelector,
  (youtubeState) => youtubeState.error
);

export const currentVideo = createSelector(
  youtubeSelector,
  (youtubeState) => youtubeState.currentVideo
);
