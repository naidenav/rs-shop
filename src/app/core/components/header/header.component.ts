import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getUserInfo, setToken } from 'src/app/redux/actions/user-profile.actions';
import { errorSelector, tokenSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      this.store.dispatch(setToken({ token: userToken }));
    }
    this.store.select(tokenSelector).subscribe((token) => {
      if (token) this.store.dispatch(getUserInfo({ token }));
    });
    this.store.select(errorSelector).subscribe((error) => {
      if (error !== '') this.notificationService.showNotification(error);
    });
  }
}
