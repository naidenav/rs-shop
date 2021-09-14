import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { Store } from '@ngrx/store';

import { removeFromBasket } from 'src/app/redux/actions/user-profile.actions';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IOrderItem } from 'src/app/shared/models/user-profile.model';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketItemComponent implements OnInit {
  @Input() public goodsItem!: IGoodsItem;

  @Output() public amount = new EventEmitter<IOrderItem>();

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {}

  public remove(): void {
    this.store.dispatch(removeFromBasket({ goodsItemId: this.goodsItem.id }));
  }

  public changeAmount(amount: number) {
    this.amount.emit({ id: this.goodsItem.id, amount });
  }
}
