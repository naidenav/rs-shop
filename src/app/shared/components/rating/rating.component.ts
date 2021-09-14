import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit {
  @Input() public rating: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
