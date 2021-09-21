import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { orderStateSelector } from 'src/app/redux/selectors/order.selectors';
import { basketSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IOrder } from 'src/app/shared/models/user-profile.model';

import {
    OrderingModalContentComponent
} from './ordering-modal-content/ordering-modal-content.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnInit, OnDestroy {
  public order!: IOrder;
  public order$!: Observable<IOrder>;
  public totalCost$!: Observable<number | undefined>;
  public basketItems$!: Observable<IGoodsItem[]>;
  public basketItemsLength$!: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private http: HttpService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.order$ = this.store.select(orderStateSelector);
    this.order$.subscribe((order) => (this.order = order));
    this.basketItems$ = this.store
      .select(basketSelector)
      .pipe(
        switchMap((items) =>
          forkJoin(items.map((item) => this.http.getGoodsItem(item)))
        )
      );
    this.basketItemsLength$ = this.store
      .select(basketSelector)
      .pipe(map((items) => items.length));
    this.totalCost$ = this.order$.pipe(
      switchMap((order) =>
        this.basketItems$.pipe(
          map((items) =>
            order.items.reduce((sum, orderItem) => {
              const orderItemPrice = items.find(
                (basketItem) => basketItem.id === orderItem.id
              )?.price;
              if (orderItemPrice) {
                return sum + orderItemPrice * orderItem.amount;
              }
              return sum;
            }, 0)
          )
        )
      )
    );
  }

  public showOrderForm(): void {
    const orderModal = this.modal.open(OrderingModalContentComponent, {
      autoFocus: false,
    });
  }

  public ngOnDestroy(): void {}
}
