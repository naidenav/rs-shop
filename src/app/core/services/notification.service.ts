import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notice: MatSnackBar) {}

  public showNotification(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.notice.open(message, '', {
      duration: 10000,
    });
  }
}
