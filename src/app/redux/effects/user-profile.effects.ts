import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

import {
    fetchedUserInfo, getUserInfo, getUserInfoFailed, loginFalied, loginSuccessful, loginUser,
    registerUser, registrationFailed, registrationSuccessful
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

  saveToken: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(registrationSuccessful, loginSuccessful),
      tap((token) => localStorage.setItem('token', token.token)),
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
}
