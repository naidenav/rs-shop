import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsItemComponent {
  @Input() public goodsItem!: IGoodsItem;
  constructor() {}
}
