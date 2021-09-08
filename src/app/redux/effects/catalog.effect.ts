import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

import { fetchedGoods, getGoods, getGoodsFailed } from '../actions/catalog.actions';

@Injectable()
export class CatalogEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  getGoods: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getGoods),
      tap((props) => console.log(props)),
      switchMap((props) =>
        this.httpService.getGoods(props.categoryId, props.subCategoryId).pipe(
          map((goods) => fetchedGoods({ goods })),
          catchError((error) => of(getGoodsFailed({ error })))
        )
      )
    )
  );
}
