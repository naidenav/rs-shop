import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PATH } from 'src/app/constants';
import { IUserProfile } from 'src/app/shared/models/user-profile.model';
import { environment } from 'src/environments/environment';

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
    return this.http
      .post<{ token: string }>(
        `${environment.SERVER_URL}${PATH.register}`,
        user
      )
      .pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  public getUserInfo(token: string) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    console.log(headers);

    return this.http
      .get<IUserProfile>(`${environment.SERVER_URL}${PATH.userInfo}`, {
        headers,
      })
      .pipe(
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
