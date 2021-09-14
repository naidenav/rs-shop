import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { favoritesSelector } from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  public favoritesItems$!: Observable<IGoodsItem[]>;

  constructor(private store: Store<AppState>, private http: HttpService) {}

  ngOnInit(): void {
    this.favoritesItems$ = this.store
      .select(favoritesSelector)
      .pipe(
        switchMap((items) =>
          forkJoin(items.map((item) => this.http.getGoodsItem(item)))
        )
      );
    this.favoritesItems$.subscribe((items) => console.log(items));
  }
}
