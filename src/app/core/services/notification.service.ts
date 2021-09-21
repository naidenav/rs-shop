import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import { clearErrorField } from 'src/app/redux/actions/user-profile.actions';
import { AppState } from 'src/app/redux/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notice: MatSnackBar, private store: Store<AppState>) {}

  public showNotification(message: string): MatSnackBarRef<TextOnlySnackBar> {
    this.store.dispatch(clearErrorField());
    if (message.includes('users/login') && message.includes('401')) {
      return this.notice.open('Вы ввели неправильные логин или пароль', '', {
        duration: 10000,
      });
    }
    return this.notice.open(message, '', {
      duration: 10000,
    });
  }
}
