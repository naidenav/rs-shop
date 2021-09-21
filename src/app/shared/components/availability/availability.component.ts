import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityComponent {
  @Input() public availableAmount!: number;

  constructor() {}
}
