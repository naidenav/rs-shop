import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { basketSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-basket-btn',
  templateUrl: './basket-btn.component.html',
  styleUrls: ['./basket-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketBtnComponent implements OnInit {
  public inBasket$!: Observable<string[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.inBasket$ = this.store.select(basketSelector);
  }
}
