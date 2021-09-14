import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { forkJoin, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { basketSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IOrder, IOrderItem } from 'src/app/shared/models/user-profile.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnInit {
  public order: IOrder = {
    items: [],
    details: {
      name: '',
      address: '',
      phone: '',
      timeToDeliver: '',
      comment: '',
    },
  };
  public basketItems$!: Observable<IGoodsItem[]>;

  private basketItemsSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private http: HttpService) {}

  ngOnInit(): void {
    this.basketItems$ = this.store
      .select(basketSelector)
      .pipe(
        switchMap((items) =>
          forkJoin(items.map((item) => this.http.getGoodsItem(item)))
        )
      );
    this.basketItemsSub = this.basketItems$.subscribe((items) => {
      items.forEach((item) =>
        this.order.items.push({
          id: item.id,
          amount: 1,
        })
      );
      console.log(this.order);
    });
  }

  public changeAmount(orderItem: IOrderItem) {
    this.order.items.push(orderItem);
  }
}
