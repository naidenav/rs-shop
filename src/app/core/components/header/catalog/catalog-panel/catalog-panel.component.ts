import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { activeCategorySelector } from 'src/app/redux/selectors/catalog.selectors';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { ICategory } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-catalog-panel',
  templateUrl: './catalog-panel.component.html',
  styleUrls: ['./catalog-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPanelComponent implements OnInit {
  public activeCategory!: Observable<ICategory | undefined>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.activeCategory = this.store
      .select(categoriesSelector)
      .pipe(
        switchMap((categories) =>
          this.store
            .select(activeCategorySelector)
            .pipe(
              map((activeCategory) =>
                categories.find((category) => category.id === activeCategory)
              )
            )
        )
      );
  }
}
