import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ordering-successful-modal-content',
  templateUrl: './ordering-successful-modal-content.component.html',
  styleUrls: ['./ordering-successful-modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderingSuccessfulModalContentComponent {
  constructor(
    public dialogRef: MatDialogRef<OrderingSuccessfulModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
}
