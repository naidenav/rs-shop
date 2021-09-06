import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { ICategory } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSidebarComponent implements OnInit {
  public categories!: Observable<ICategory[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categories = this.store.select(categoriesSelector);
  }
}
