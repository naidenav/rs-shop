import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { getGoods } from 'src/app/redux/actions/catalog.actions';
import {
    goodsSelector, sortingCriterion, sortingDirection
} from 'src/app/redux/selectors/catalog.selectors';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-goods-field',
  templateUrl: './goods-field.component.html',
  styleUrls: ['./goods-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsFieldComponent implements OnInit, OnDestroy {
  public subCategoryTitle$!: Observable<string | undefined>;

  public goods$!: Observable<IGoodsItem[]>;

  public sortingDirection$!: Observable<string>;
  public sortingCriterion$!: Observable<string>;

  private paramsSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.subCategoryTitle$ = this.route.params.pipe(
      switchMap((params) =>
        this.store
          .select(categoriesSelector)
          .pipe(
            map(
              (categories) =>
                categories
                  .find((category) => category.id === params.categoryId)
                  ?.subCategories.find(
                    (subcategory) => subcategory.id === params.subCategoryId
                  )?.name
            )
          )
      )
    );

    this.paramsSub = this.route.params.subscribe((params) =>
      this.store.dispatch(
        getGoods({
          categoryId: params.categoryId,
          subCategoryId: params.subCategoryId,
        })
      )
    );

    this.goods$ = this.store.select(goodsSelector);

    this.sortingDirection$ = this.store.select(sortingDirection);
    this.sortingCriterion$ = this.store.select(sortingCriterion);
  }

  public ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }
}
