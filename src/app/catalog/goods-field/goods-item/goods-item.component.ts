import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
