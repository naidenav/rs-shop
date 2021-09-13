import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { setUserInfoToLocalStorage } from 'src/app/utils';

import {
    addedToBasket, addedToFavorites, fetchedUserInfo, getUserInfo, getUserInfoFailed, loginFalied,
    loginSuccessful, loginUser, moveToBasket, moveToBasketFailed, moveToFavorites,
    moveToFavoritesFailed, registerUser, registrationFailed, registrationSuccessful,
    removedFromBasket, removedFromFavorites, removeFromBasket, removeFromBasketFailed,
    removeFromFavorites, removeFromFavoritesFailed, userInfoSaved
} from '../actions/user-profile.actions';

@Injectable()
export class UserProfileEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  registerUser: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      switchMap((user) =>
        this.httpService.registerUser(user).pipe(
          map((token) => registrationSuccessful(token)),
          catchError((error) => of(registrationFailed({ error })))
        )
      )
    )
  );

  login: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap((props) =>
        this.httpService.loginUser(props).pipe(
          map((token) => loginSuccessful(token)),
          catchError((error) => of(loginFalied({ error })))
        )
      )
    )
  );

  saveUserInfo: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchedUserInfo),
      tap((action) => setUserInfoToLocalStorage(action.userInfo)),
      switchMap(() => of(userInfoSaved()))
    )
  );

  saveToken: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(registrationSuccessful, loginSuccessful),
      tap((action) => localStorage.setItem('token', action.token)),
      switchMap((token) => of(getUserInfo(token)))
    )
  );

  getUserInfo: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserInfo),
      switchMap((prop) =>
        this.httpService.getUserInfo(prop.token).pipe(
          map((userInfo) => fetchedUserInfo({ userInfo })),
          catchError((error) => of(getUserInfoFailed({ error })))
        )
      )
    )
  );

  moveToBasket: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(moveToBasket),
      // tap((props) => {
      //   const userInfo = getUserInfoFromLocalStorage();
      //   userInfo.cart.push(props.goodsItemId);
      //   setUserInfoToLocalStorage(userInfo);
      // }),
      switchMap((props) =>
        this.httpService.moveToBasket(props.goodsItemId).pipe(
          map(() => addedToBasket({ goodsItemId: props.goodsItemId })),
          catchError((error) => of(moveToBasketFailed({ error })))
        )
      )
    )
  );

  removeFromBasket: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromBasket),
      // tap((props) => {
      //   const userInfo = getUserInfoFromLocalStorage();
      //   userInfo.cart = [...userInfo.cart].filter(
      //     (id) => id !== props.goodsItemId
      //   );
      //   setUserInfoToLocalStorage(userInfo);
      // }),
      switchMap((props) =>
        this.httpService.removeFromBasket(props.goodsItemId).pipe(
          tap((i) => console.log(i)),
          map((id) => removedFromBasket({ goodsItemId: props.goodsItemId })),
          catchError((error) => of(removeFromBasketFailed({ error })))
        )
      )
    )
  );

  moveToFavorites: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(moveToFavorites),
      // tap((props) => {
      //   const userInfo = getUserInfoFromLocalStorage();
      //   userInfo.favorites.push(props.goodsItemId);
      //   setUserInfoToLocalStorage(userInfo);
      // }),
      switchMap((props) =>
        this.httpService.moveToFavorites(props.goodsItemId).pipe(
          map(() => addedToFavorites({ goodsItemId: props.goodsItemId })),
          catchError((error) => of(moveToFavoritesFailed({ error })))
        )
      )
    )
  );

  removeFromFavorites: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromFavorites),
      // tap((props) => {
      //   const userInfo = getUserInfoFromLocalStorage();
      //   userInfo.favorites = [...userInfo.favorites].filter(
      //     (id) => id !== props.goodsItemId
      //   );
      //   setUserInfoToLocalStorage(userInfo);
      // }),
      switchMap((props) =>
        this.httpService.removeFromFavorites(props.goodsItemId).pipe(
          map(() => removedFromFavorites({ goodsItemId: props.goodsItemId })),
          catchError((error) => of(removeFromFavoritesFailed({ error })))
        )
      )
    )
  );
}
