import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { closeCategoriesPanel } from 'src/app/redux/actions/categories.actions';
import { activeCategorySelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { ISubCategory } from 'src/app/shared/models/categories.model';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-subcategory-item',
  templateUrl: './subcategory-item.component.html',
  styleUrls: ['./subcategory-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubcategoryItemComponent implements OnInit {
  @Input() public subCategory!: ISubCategory;

  @Input() public categoryId!: string;

  public imageUrl$!: Observable<string>;

  public subcategoryResponce$!: Observable<IGoodsItem[]>;

  constructor(private http: HttpService, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.imageUrl$ = this.store
      .select(activeCategorySelector)
      .pipe(
        switchMap((categoryId) =>
          this.http
            .getGoods(categoryId, this.subCategory.id)
            .pipe(map((goods) => goods[1].imageUrls[0]))
        )
      );
  }

  public closeCategoriesPanel(): void {
    this.store.dispatch(closeCategoriesPanel());
  }
}
