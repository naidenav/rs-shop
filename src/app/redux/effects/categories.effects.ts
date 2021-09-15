import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

import {
    fetchedCategories, getCategories, getCategoriesFailed
} from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  registerUser: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategories),
      switchMap(() =>
        this.httpService.getCategories().pipe(
          map((categories) => fetchedCategories({ categories })),
          catchError((error) => of(getCategoriesFailed({ error })))
        )
      )
    )
  );
}
