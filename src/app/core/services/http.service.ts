import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PATH } from 'src/app/constants';
import { ICategory } from 'src/app/shared/models/categories.model';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IQueryParams } from 'src/app/shared/models/query-params.model';
import { IUserProfile } from 'src/app/shared/models/user-profile.model';
import { getQueryParams } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public registerUser(user: {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
  }) {
    return this.http.post<{ token: string }>(PATH.register, user).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public loginUser(user: { login: string; password: string }) {
    return this.http.post<{ token: string }>(PATH.login, user).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public getUserInfo(token: string) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http
      .get<IUserProfile>(PATH.userInfo, {
        headers,
      })
      .pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  public getCategories() {
    return this.http.get<ICategory[]>(PATH.categories).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public getGoods(
    categoryId: string,
    subcategoryId: string = '',
    queryParams?: IQueryParams[]
  ) {
    const params = getQueryParams(queryParams);

    return this.http
      .get<IGoodsItem[]>(
        `${PATH.category}/${categoryId}/${subcategoryId}${params}`
      )
      .pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  public getGoodsItem(goodsItemId: string) {
    return this.http.get<IGoodsItem>(`${PATH.goodsItem}/${goodsItemId}`).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public moveToBasket(goodsItemId: string) {
    return this.http.post(PATH.basket, { id: goodsItemId }).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public removeFromBasket(goodsItemId: string) {
    return this.http.delete<string>(`${PATH.basket}?id=${goodsItemId}`).pipe(
      map(() => of('d')),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public moveToFavorites(goodsItemId: string) {
    return this.http.post<void>(PATH.favorites, { id: goodsItemId }).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public removeFromFavorites(goodsItemId: string) {
    return this.http.delete<void>(`${PATH.favorites}?id=${goodsItemId}`).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred: ', err.error.message);
    } else {
      console.error(
        `Server returned code: ${err.status}, body was: ${err.error}`
      );
    }

    return throwError('Something bad happened. Please try again later.');
  }
}
