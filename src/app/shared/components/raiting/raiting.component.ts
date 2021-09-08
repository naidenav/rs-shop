import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaitingComponent implements OnInit {
  @Input() public rating: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
