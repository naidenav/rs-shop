import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsItemComponent implements OnInit {
  @Input() public goodsItem!: IGoodsItem;
  constructor() {}

  ngOnInit(): void {}
}
