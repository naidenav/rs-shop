import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { SORTING_DIRECTION } from 'src/app/constants';
import {
    resetSorting, setSortingCriterion, setSortingDirection
} from 'src/app/redux/actions/catalog.actions';
import { sortingCriterion, sortingDirection } from 'src/app/redux/selectors/catalog.selectors';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingPanelComponent implements OnInit, OnDestroy {
  public direction$!: Observable<string>;
  public criterion$!: Observable<string>;
  public direction!: string;
  public criterion!: string;

  private routeSub: Subscription = new Subscription();
  private directionSub: Subscription = new Subscription();
  private criterionSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.routeSub = this.route.url.subscribe(() =>
      this.store.dispatch(resetSorting())
    );
    this.direction$ = this.store.select(sortingDirection);
    this.directionSub = this.direction$.subscribe(
      (direction) => (this.direction = direction)
    );
    this.criterion$ = this.store.select(sortingCriterion);
    this.criterionSub = this.criterion$.subscribe(
      (criterion) => (this.criterion = criterion)
    );
  }

  public sort(criterion: string): void {
    if (this.criterion !== criterion) {
      this.store.dispatch(setSortingCriterion({ criterion }));
      this.store.dispatch(
        setSortingDirection({ direction: SORTING_DIRECTION.asc })
      );
    } else if (this.criterion === criterion) {
      switch (this.direction) {
        case '':
          this.store.dispatch(
            setSortingDirection({ direction: SORTING_DIRECTION.asc })
          );
          break;
        case SORTING_DIRECTION.asc:
          this.store.dispatch(
            setSortingDirection({ direction: SORTING_DIRECTION.desc })
          );
          break;
        case SORTING_DIRECTION.desc:
          this.store.dispatch(
            setSortingDirection({ direction: SORTING_DIRECTION.asc })
          );
          break;
      }
    }
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.directionSub.unsubscribe();
    this.criterionSub.unsubscribe();
  }
}
