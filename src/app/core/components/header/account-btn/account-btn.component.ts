import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { clearUserInfo } from 'src/app/redux/actions/user-profile.actions';
import { userProfileSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IUserProfileState } from 'src/app/redux/state/user-profile.state';

import {
    ModalLoginContentComponent
} from '../modals/modal-login-content/modal-login-content.component';

@Component({
  selector: 'app-account-btn',
  templateUrl: './account-btn.component.html',
  styleUrls: ['./account-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBtnComponent implements OnInit {
  @ViewChild('arrow', { read: ElementRef }) arrow?: ElementRef;

  public userInfo$!: Observable<IUserProfileState>;

  constructor(public modal: MatDialog, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userInfo$ = this.store.select(userProfileSelector);
  }

  public openModal() {
    const modalRef = this.modal.open(ModalLoginContentComponent, {
      autoFocus: false,
    });
  }

  public arrowUp() {
    this.arrow?.nativeElement.classList.add('arrow-up');
  }

  public arrowDown() {
    this.arrow?.nativeElement.classList.remove('arrow-up');
  }

  public logout() {
    setTimeout(() => this.store.dispatch(clearUserInfo()), 300);
    localStorage.removeItem('token');
  }
}
