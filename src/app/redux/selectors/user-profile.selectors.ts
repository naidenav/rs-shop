import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { CustomCardsState } from '../state/user-profile.state';

export const customCardsSelector = createFeatureSelector<
  AppState,
  CustomCardsState
>('customCardsState');

export const customCards = createSelector(
  customCardsSelector,
  (customCardsState) => customCardsState.customCards
);
