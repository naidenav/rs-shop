import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
    changeActiveCategory, openCategoriesPanel
} from 'src/app/redux/actions/categories.actions';
import { goodsItem } from 'src/app/redux/selectors/catalog.selectors';
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
export class NavigationChainComponent implements OnInit {
  @Input() public routeParams!: Params;
  public goodsItem$!: Observable<IGoodsItem>;
  public category$!: Observable<ICategory | undefined>;
  public subCategory$!: Observable<ISubCategory | undefined>;

  private categories$!: Observable<ICategory[]>;
  private category!: ICategory | undefined;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.goodsItem$ = this.store.select(goodsItem);

    this.category$ = this.route.params.pipe(
      switchMap((params) =>
        this.goodsItem$.pipe(
          switchMap((goodsItem) =>
            this.categories$.pipe(
              map((categories) =>
                categories.find(
                  (item) =>
                    item.id === (params.categoryId || goodsItem.category)
                )
              ),
              tap((category) => (this.category = category))
            )
          )
        )
      )
    );

    this.subCategory$ = this.category$.pipe(
      switchMap((category) =>
        this.goodsItem$.pipe(
          map((item) =>
            category?.subCategories.find(
              (subCategory) =>
                subCategory.id ===
                (item.subCategory || this.routeParams.subCategoryId)
            )
          )
        )
      )
    );
  }

  public openCategory(): void {
    this.store.dispatch(openCategoriesPanel());
    if (this.category)
      this.store.dispatch(changeActiveCategory({ category: this.category.id }));
  }
}
