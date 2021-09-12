import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { getGoodsItem } from 'src/app/redux/actions/catalog.actions';
import { goodsItem } from 'src/app/redux/selectors/catalog.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-goods-item-details',
  templateUrl: './goods-item-details.component.html',
  styleUrls: ['./goods-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsItemDetailsComponent implements OnInit, OnDestroy {
  public goodsItem$!: Observable<IGoodsItem>;
  public routeParams$!: Observable<Params>;

  private routeParamsSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.goodsItem$ = this.store.select(goodsItem);
    this.routeParams$ = this.route.params;
    this.routeParamsSub = this.route.params.subscribe((params: Params) =>
      this.store.dispatch(getGoodsItem({ goodsItemId: params.goodsItemId }))
    );
  }

  public ngOnDestroy(): void {
    this.routeParamsSub.unsubscribe();
  }
}
