import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { getGoods } from 'src/app/redux/actions/catalog.actions';
import { goodsSelector } from 'src/app/redux/selectors/catalog.selectors';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-goods-field',
  templateUrl: './goods-field.component.html',
  styleUrls: ['./goods-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsFieldComponent implements OnInit {
  public categoryId!: string;

  public subcategoryTitle$!: Observable<string | undefined>;

  public goods$!: Observable<IGoodsItem[]>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subcategoryTitle$ = this.route.params.pipe(
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
    this.route.params.subscribe((params) =>
      this.store.dispatch(
        getGoods({
          categoryId: params.categoryId,
          subCategoryId: params.subCategoryId,
        })
      )
    );
    this.goods$ = this.store.select(goodsSelector);
  }
}
