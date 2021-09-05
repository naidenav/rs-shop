import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { token } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';

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
  private token: Subscription = new Subscription();

  constructor(public modal: MatDialog, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.token = this.store
      .select(token)
      .subscribe((token) => console.log(token));
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
}
