import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { getGoodsItem } from 'src/app/redux/actions/catalog.actions';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-goods-item-details',
  templateUrl: './goods-item-details.component.html',
  styleUrls: ['./goods-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsItemDetailsComponent implements OnInit {
  public goodsItem$!: Observable<IGoodsItem>;
  public goodsItem: IGoodsItem = {} as IGoodsItem;
  public routeParams$!: Observable<Params>;

  private routeParamsSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams$ = this.route.params;
    this.routeParamsSub = this.route.params.subscribe((params: Params) =>
      this.store.dispatch(getGoodsItem({ goodsItemId: params.goodsItemId }))
    );
  }
}
