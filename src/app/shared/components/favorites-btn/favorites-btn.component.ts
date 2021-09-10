import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { moveToFavorites, removeFromFavorites } from 'src/app/redux/actions/user-profile.actions';
import { favoritesSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-favorites-btn',
  templateUrl: './favorites-btn.component.html',
  styleUrls: ['./favorites-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesBtnComponent implements OnInit, OnDestroy {
  @Input() public goodsItemId!: string;

  public inFavoritesSub: Subscription = new Subscription();

  public inFavorites!: boolean;

  public inFavorites$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.inFavoritesSub = this.store
      .select(favoritesSelector)
      .pipe(
        map((goods) =>
          goods.find((id) => id === this.goodsItemId) ? true : false
        )
      )
      .subscribe((value) => (this.inFavorites = value));

    this.inFavorites$ = this.store
      .select(favoritesSelector)
      .pipe(
        map((goods) =>
          goods.find((id) => id === this.goodsItemId) ? true : false
        )
      );
  }

  public favoritesHandler() {
    if (this.inFavorites) {
      this.store.dispatch(
        removeFromFavorites({ goodsItemId: this.goodsItemId })
      );
    } else {
      this.store.dispatch(moveToFavorites({ goodsItemId: this.goodsItemId }));
    }
  }

  public ngOnDestroy(): void {
    this.inFavoritesSub.unsubscribe();
  }
}
