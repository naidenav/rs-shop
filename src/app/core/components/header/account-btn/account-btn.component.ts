import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public modal: MatDialog) {}

  ngOnInit(): void {}

  public openModal() {
    const modalRef = this.modal.open(ModalLoginContentComponent);
  }

  public arrowUp() {
    this.arrow?.nativeElement.classList.add('arrow-up');
  }

  public arrowDown() {
    this.arrow?.nativeElement.classList.remove('arrow-up');
  }
}
