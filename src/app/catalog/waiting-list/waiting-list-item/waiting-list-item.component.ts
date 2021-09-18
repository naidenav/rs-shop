import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { deleteOrder } from 'src/app/redux/actions/user-profile.actions';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IOrder } from 'src/app/shared/models/user-profile.model';

import {
    CancelOrderModalContentComponent
} from '../cancel-order-modal-content/cancel-order-modal-content.component';

@Component({
  selector: 'app-waiting-list-item',
  templateUrl: './waiting-list-item.component.html',
  styleUrls: ['./waiting-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingListItemComponent implements OnInit {
  @Input() public order!: IOrder;
  @Input() public index!: number;

  public orderItems$!: Observable<IGoodsItem[]>;

  public orderCost$!: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private http: HttpService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.orderItems$ = forkJoin(
      this.order.items.map((item) => this.http.getGoodsItem(item.id))
    );
    this.orderCost$ = this.orderItems$.pipe(
      map((orderItems) => {
        return this.order.items.reduce((sum, value) => {
          const itemPrice = orderItems.find(
            (item) => item.id === value.id
          )?.price;
          if (itemPrice) return sum + itemPrice * value.amount;
          return sum;
        }, 0);
      })
    );
  }

  public cancelOrder(): void {
    const cancelOrderModal = this.modal.open(CancelOrderModalContentComponent, {
      autoFocus: false,
    });

    cancelOrderModal.afterClosed().subscribe((result) => {
      if (result) this.removeOrder();
    });
  }

  public removeOrder() {
    if (this.order.id) this.store.dispatch(deleteOrder({ id: this.order.id }));
  }

  public getItemAmount(id: string) {
    return this.order.items.find((item) => item.id === id)?.amount;
  }
}
