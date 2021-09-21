import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cancel-order-modal-content',
  templateUrl: './cancel-order-modal-content.component.html',
  styleUrls: ['./cancel-order-modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelOrderModalContentComponent {
  constructor() {}
}
