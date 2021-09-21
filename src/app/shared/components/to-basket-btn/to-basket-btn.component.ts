import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    moveToBasket, openLoginModal, removeFromBasket
} from 'src/app/redux/actions/user-profile.actions';
import { basketSelector, isLoggedSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-to-basket-btn',
  templateUrl: './to-basket-btn.component.html',
  styleUrls: ['./to-basket-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToBasketBtnComponent implements OnInit, OnDestroy {
  @Input() public goodsItemId!: string;

  public inBasketSub: Subscription = new Subscription();

  public inBasket!: boolean;

  public inBasket$!: Observable<boolean>;

  private isLogged!: boolean;

  private isLoggedSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.isLoggedSub = this.store
      .select(isLoggedSelector)
      .subscribe((isLogged) => (this.isLogged = isLogged));
    this.inBasketSub = this.store
      .select(basketSelector)
      .pipe(
        map((goods) =>
          goods.find((id) => id === this.goodsItemId) ? true : false
        )
      )
      .subscribe((value) => (this.inBasket = value));

    this.inBasket$ = this.store
      .select(basketSelector)
      .pipe(
        map((goods) =>
          goods.find((id) => id === this.goodsItemId) ? true : false
        )
      );
  }

  public basketHandler() {
    if (!this.isLogged) {
      this.store.dispatch(openLoginModal());
      return;
    }
    if (this.inBasket) {
      this.store.dispatch(removeFromBasket({ goodsItemId: this.goodsItemId }));
    } else {
      this.store.dispatch(moveToBasket({ goodsItemId: this.goodsItemId }));
    }
  }

  public ngOnDestroy(): void {
    this.inBasketSub.unsubscribe();
    this.isLoggedSub.unsubscribe();
  }
}
