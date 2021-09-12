import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RESULTS_COUNT } from 'src/app/constants';
import {
    getGoods, getMoreGoods, increasePaginationCoefficient, nullifyPaginationCoefficient,
    removeGoodsItem
} from 'src/app/redux/actions/catalog.actions';
import {
    areThereMoreGoods, goodsSelector, paginationCoefficient, sortingCriterion, sortingDirection
} from 'src/app/redux/selectors/catalog.selectors';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { IQueryParams } from 'src/app/shared/models/query-params.model';

@Component({
  selector: 'app-goods-field',
  templateUrl: './goods-field.component.html',
  styleUrls: ['./goods-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsFieldComponent implements OnInit, OnDestroy {
  public paramsSub: Subscription = new Subscription();
  public params!: Params;
  public params$!: Observable<Params>;

  public subCategoryTitle$!: Observable<string | undefined>;
  public paginationCoefficient$!: Observable<number>;
  public goods$!: Observable<IGoodsItem[]>;
  public sortingDirection$!: Observable<string>;
  public sortingCriterion$!: Observable<string>;
  public areThereMoreGoods$!: Observable<boolean>;

  private paginationCoefficient!: number;

  private paginationCoefficientSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.store.dispatch(removeGoodsItem());
    this.params$ = this.route.params;
    this.paramsSub = this.params$.subscribe((params) => {
      this.store.dispatch(nullifyPaginationCoefficient());
      this.params = params;
    });

    this.areThereMoreGoods$ = this.store.select(areThereMoreGoods);

    this.paginationCoefficient$ = this.store.select(paginationCoefficient);
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

    this.paginationCoefficientSub = this.paginationCoefficient$.subscribe(
      (coefficient) => (this.paginationCoefficient = coefficient)
    );

    this.paramsSub = this.route.params.subscribe((params) => {
      const queryParams: IQueryParams[] = [
        {
          key: 'start',
          value: '0',
        },
        {
          key: 'count',
          value: RESULTS_COUNT + '',
        },
      ];
      this.store.dispatch(
        getGoods({
          categoryId: params.categoryId,
          subCategoryId: params.subCategoryId,
          queryParams,
        })
      );
      this.store.dispatch(increasePaginationCoefficient());
    });

    this.goods$ = this.store.select(goodsSelector);

    this.sortingDirection$ = this.store.select(sortingDirection);
    this.sortingCriterion$ = this.store.select(sortingCriterion);
  }

  public showMore(): void {
    const queryParams: IQueryParams[] = [
      {
        key: 'start',
        value: RESULTS_COUNT * this.paginationCoefficient + '',
      },
      {
        key: 'count',
        value: RESULTS_COUNT + '',
      },
    ];

    this.store.dispatch(
      getMoreGoods({
        categoryId: this.params.categoryId,
        subCategoryId: this.params.subCategoryId,
        queryParams,
      })
    );
    this.store.dispatch(increasePaginationCoefficient());
  }

  public ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.paginationCoefficientSub.unsubscribe();
  }
}
