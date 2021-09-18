import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { ordersSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IOrder } from 'src/app/shared/models/user-profile.model';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingListComponent implements OnInit {
  public orders$!: Observable<IOrder[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.orders$ = this.store.select(ordersSelector);
  }
}
