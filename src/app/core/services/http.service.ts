import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public register(
    firstName: string,
    lastName: string,
    login: string,
    password: string
  ) {
    return this.http
      .post(environment.SERVER_URL, {
        firstName,
        lastName,
        login,
        password,
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
