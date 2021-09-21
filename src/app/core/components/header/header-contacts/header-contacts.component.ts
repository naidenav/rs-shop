import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-contacts',
  templateUrl: './header-contacts.component.html',
  styleUrls: ['./header-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContactsComponent {
  @ViewChild('elseBtn', { read: ElementRef }) elseBtn?: ElementRef;

  constructor() {}

  public arrowUp() {
    this.elseBtn?.nativeElement.classList.add('arrow-up');
  }

  public arrowDown() {
    this.elseBtn?.nativeElement.classList.remove('arrow-up');
  }
}
