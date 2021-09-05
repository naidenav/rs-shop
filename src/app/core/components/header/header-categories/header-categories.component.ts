import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { getCategories } from 'src/app/redux/actions/categories.actions';
import { categories } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { ICategory } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderCategoriesComponent implements OnInit {
  public categories$!: Observable<ICategory[]>;

  constructor(private store: Store<AppState>) {
    store.dispatch(getCategories());
  }

  ngOnInit(): void {
    this.categories$ = this.store.select(categories);
  }
}
