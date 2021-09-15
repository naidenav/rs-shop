import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeFromBasket } from 'src/app/redux/actions/user-profile.actions';
import { orderItemsSelector } from 'src/app/redux/selectors/order.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketItemComponent implements OnInit {
  @Input() public goodsItem!: IGoodsItem;

  public totalCost$!: Observable<number | null>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.totalCost$ = this.store.select(orderItemsSelector).pipe(
      map((items) => {
        const amount = items.find(
          (item) => item.id === this.goodsItem.id
        )?.amount;
        return amount ? amount * Number(this.goodsItem.price) : null;
      })
    );
  }

  public remove(): void {
    this.store.dispatch(removeFromBasket({ goodsItemId: this.goodsItem.id }));
  }
}
