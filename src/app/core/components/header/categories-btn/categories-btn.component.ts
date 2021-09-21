import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import {
    closeCategoriesPanel, openCategoriesPanel
} from 'src/app/redux/actions/categories.actions';
import {
    categoriesSelector, isCategoriesPanelOpenSelector
} from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { ICategory } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-categories-btn',
  templateUrl: './categories-btn.component.html',
  styleUrls: ['./categories-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesBtnComponent implements OnInit {
  public isCategoriesPanelOpened!: boolean;

  public isCategoriesPanelOpened$!: Observable<boolean>;

  public categories$!: Observable<ICategory[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.isCategoriesPanelOpened$ = this.store.select(
      isCategoriesPanelOpenSelector
    );
    this.isCategoriesPanelOpened$.subscribe(
      (value) => (this.isCategoriesPanelOpened = value)
    );
  }

  public toggleCategoriesPanel() {
    this.store.dispatch(
      this.isCategoriesPanelOpened
        ? closeCategoriesPanel()
        : openCategoriesPanel()
    );
  }
}
