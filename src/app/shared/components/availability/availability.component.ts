import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityComponent implements OnInit {
  @Input() public availableAmount!: number;

  constructor() {}

  ngOnInit(): void {}
}
