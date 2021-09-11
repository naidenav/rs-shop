import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    changeActiveCategory, openCategoriesPanel
} from 'src/app/redux/actions/categories.actions';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';

import { ICategory, ISubCategory } from '../../models/categories.model';
import { IGoodsItem } from '../../models/goods.model';

@Component({
  selector: 'app-navigation-chain',
  templateUrl: './navigation-chain.component.html',
  styleUrls: ['./navigation-chain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationChainComponent implements OnInit, OnDestroy {
  @Input() public routeParams!: Params;
  @Input() public goodsItem!: IGoodsItem;
  public category$!: Observable<ICategory | undefined>;
  public subCategory$!: Observable<ISubCategory | undefined>;

  private categories$!: Observable<ICategory[]>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);

    this.category$ = this.categories$.pipe(
      map((categories) =>
        categories.find((item) => item.id === this.routeParams.categoryId)
      )
    );

    this.subCategory$ = this.category$.pipe(
      map((category) =>
        category?.subCategories.find(
          (item) => item.id === this.routeParams.subCategoryId
        )
      )
    );
  }

  public openCategory(): void {
    this.store.dispatch(openCategoriesPanel());
    this.store.dispatch(
      changeActiveCategory({ category: this.routeParams.categoryId })
    );
  }

  public ngOnDestroy(): void {}
}
