import {
    ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild
} from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { changeAmount } from 'src/app/redux/actions/order.actions';
import { orderItemsSelector } from 'src/app/redux/selectors/order.selectors';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCounterComponent implements OnInit {
  @Input() goodsItemId!: string;

  @ViewChild('counterInput') counterInput!: ElementRef;

  public counter!: number;

  public counter$!: Observable<number | undefined>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.counter$ = this.store
      .select(orderItemsSelector)
      .pipe(
        map(
          (items) => items.find((item) => item.id === this.goodsItemId)?.amount
        )
      );
  }

  public changeAmount(): void {
    this.store.dispatch(
      changeAmount({
        id: this.goodsItemId,
        amount: this.counterInput.nativeElement.value,
      })
    );
  }

  public increase(): void {
    this.counterInput.nativeElement.value++;
    this.changeAmount();
  }

  public decrease(): void {
    this.counterInput.nativeElement.value--;
    this.changeAmount();
  }

  public testForEmptiness(): void {
    this.counterInput.nativeElement.value =
      this.counterInput.nativeElement.value || 1;
  }
}
