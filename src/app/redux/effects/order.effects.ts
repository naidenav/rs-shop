import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOrderItem } from 'src/app/shared/models/user-profile.model';

import { addItemToOrder, deleteOrderItem, putGoodsToOrder } from '../actions/order.actions';
import { addedToBasket, fetchedUserInfo, removedFromBasket } from '../actions/user-profile.actions';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions) {}

  setOrderItems: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchedUserInfo),
      map((props) => {
        const orderItems: IOrderItem[] = props.userInfo.cart.map((item) => ({
          id: item,
          amount: 1,
        }));
        return putGoodsToOrder({ goods: orderItems });
      })
    )
  );

  addOrderItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(addedToBasket),
      map((props) =>
        addItemToOrder({ item: { id: props.goodsItemId, amount: 1 } })
      )
    )
  );

  removeOrderItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(removedFromBasket),
      map((props) => deleteOrderItem({ id: props.goodsItemId }))
    )
  );
}
