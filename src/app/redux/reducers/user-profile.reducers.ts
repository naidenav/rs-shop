import { createReducer, on } from '@ngrx/store';

import * as CustomCardActions from '../actions/user-profile.actions';
import { initialCustomCardsState } from '../state/user-profile.state';

export const customCardsReducer = createReducer(
  initialCustomCardsState,
  on(CustomCardActions.createCustomCard, (state, { customCard }) => ({
    ...state,
    customCards: [...state.customCards, customCard],
  }))
);
