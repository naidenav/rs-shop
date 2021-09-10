import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
    changeActiveCategory, openCategoriesPanel
} from 'src/app/redux/actions/categories.actions';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';

import { ICategory, ISubCategory } from '../../models/categories.model';

@Component({
  selector: 'app-navigation-chain',
  templateUrl: './navigation-chain.component.html',
  styleUrls: ['./navigation-chain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationChainComponent implements OnInit, OnDestroy {
  public urlSegmentsSub!: Subscription;
  public urlSegments!: string[];
  public urlSegments$!: Observable<string[]>;
  public category$!: Observable<ICategory | undefined>;
  public subCategory$!: Observable<ISubCategory | undefined>;

  private categories$!: Observable<ICategory[]>;

  constructor(
    private store: Store<AppState>,
    // private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.urlSegments$ = this.route.url.pipe(
      map((segments) => segments.map((segment) => segment.path))
    );
    this.urlSegmentsSub = this.urlSegments$.subscribe((segments) => {
      this.urlSegments = segments;
    });

    this.category$ = this.urlSegments$.pipe(
      switchMap((segments) =>
        this.categories$.pipe(
          map((categories) =>
            categories.find((item) => item.id === segments[1])
          )
        )
      )
    );
    this.subCategory$ = this.category$.pipe(
      map((category) =>
        category?.subCategories.find((item) => item.id === this.urlSegments[2])
      )
    );
  }

  public openCategory(): void {
    this.store.dispatch(openCategoriesPanel());
    this.store.dispatch(
      changeActiveCategory({ category: this.urlSegments[1] })
    );
  }

  public ngOnDestroy(): void {
    this.urlSegmentsSub.unsubscribe();
  }
}
