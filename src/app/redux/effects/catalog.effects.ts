import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { IQueryParams } from 'src/app/shared/models/query-params.model';

import {
    fetchedGoods, fetchedGoodsItem, fetchedMoreGoods, getGoods, getGoodsFailed, getGoodsItem,
    getGoodsItemFailed, getMoreGoods, noMoreGoods, thereAreMoreGoods
} from '../actions/catalog.actions';

@Injectable()
export class CatalogEffects {
  private categoryId!: string;
  private subCategoryId!: string;
  private queryParams!: IQueryParams[];

  constructor(private httpService: HttpService, private actions$: Actions) {}

  getGoods: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getGoods),
      tap((props) => {
        this.categoryId = props.categoryId;
        this.subCategoryId = props.subCategoryId;
        this.queryParams = [
          ...props.queryParams.map((param) =>
            param.key === 'start' ? { ...param, value: param.value + 1 } : param
          ),
        ];
      }),
      switchMap((props) =>
        this.httpService
          .getGoods(props.categoryId, props.subCategoryId, props.queryParams)
          .pipe(
            map((goods) => fetchedGoods({ goods })),
            catchError((error) => of(getGoodsFailed({ error })))
          )
      )
    )
  );

  getMoreGoods: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getMoreGoods),
      tap((props) => {
        this.categoryId = props.categoryId;
        this.subCategoryId = props.subCategoryId;
        this.queryParams = [
          ...props.queryParams.map((param) =>
            param.key === 'start' ? { ...param, value: param.value + 1 } : param
          ),
        ];
      }),
      switchMap((props) =>
        this.httpService
          .getGoods(props.categoryId, props.subCategoryId, props.queryParams)
          .pipe(
            map((goods) => fetchedMoreGoods({ goods })),
            catchError((error) => of(getGoodsFailed({ error })))
          )
      )
    )
  );

  checkMoreGoods: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchedGoods, fetchedMoreGoods),
      switchMap((props) =>
        this.httpService
          .getGoods(this.categoryId, this.subCategoryId, this.queryParams)
          .pipe(
            map((goods) =>
              goods.length ? thereAreMoreGoods() : noMoreGoods()
            ),
            catchError((error) => of(getGoodsFailed({ error })))
          )
      )
    )
  );

  getGoodsItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getGoodsItem),
      switchMap((props) =>
        this.httpService.getGoodsItem(props.goodsItemId).pipe(
          map((goodsItem) => fetchedGoodsItem({ goodsItem })),
          catchError((error) => of(getGoodsItemFailed({ error })))
        )
      )
    )
  );
}
