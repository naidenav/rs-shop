import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { removeFromFavorites } from 'src/app/redux/actions/user-profile.actions';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesItemComponent implements OnInit {
  @Input() public goodsItem!: IGoodsItem;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public remove() {
    this.store.dispatch(
      removeFromFavorites({ goodsItemId: this.goodsItem.id })
    );
  }
}
