import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { closeCatalog, openCatalog } from 'src/app/redux/actions/catalog.actions';
import { isCatalogOpenSelector } from 'src/app/redux/selectors/catalog.selectors';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { ICategory } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  public isCatalogOpened!: boolean;

  public isCatalogOpened$!: Observable<boolean>;

  public categories$!: Observable<ICategory[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.isCatalogOpened$ = this.store.select(isCatalogOpenSelector);
    this.isCatalogOpened$.subscribe((value) => (this.isCatalogOpened = value));
  }

  public toggleCatalog() {
    this.store.dispatch(this.isCatalogOpened ? closeCatalog() : openCatalog());
  }
}
