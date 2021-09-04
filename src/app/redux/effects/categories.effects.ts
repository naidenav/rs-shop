import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpYoutubeService } from 'src/app/shared/services/http-youtube.service';

import {
    getSearchResults, getVideoItem, getVideoItemFailed, getVideoItemsFailed,
    getVideoItemsSuccessful, getVideoItemSuccessful
} from '../actions/categories.actions';

@Injectable()
export class YoutubeEffects {
  constructor(
    private httpYoutubeServise: HttpYoutubeService,
    private actions$: Actions
  ) {}

  getSearchResults: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getSearchResults),
      switchMap((action) =>
        this.httpYoutubeServise
          .getSearchResults(action.textFragment)
          .pipe(
            map((response) => response.items.map((item) => item.id.videoId))
          )
      ),
      switchMap((items) =>
        this.httpYoutubeServise
          .getVideoItems(items)
          .pipe(
            map((response) =>
              getVideoItemsSuccessful({ videoItems: response.items })
            )
          )
      ),
      catchError((error) => of(getVideoItemsFailed({ error })))
    )
  );

  getVideoItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getVideoItem),
      switchMap((action) =>
        this.httpYoutubeServise.getVideoItems([action.id]).pipe(
          map((response) =>
            getVideoItemSuccessful({ videoItem: response.items[0] })
          ),
          catchError((error) => of(getVideoItemFailed({ error })))
        )
      )
    )
  );
}
