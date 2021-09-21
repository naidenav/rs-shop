import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, delay, filter, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { IGoodsItem } from 'src/app/shared/models/goods.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  public searchInput: string = '';
  public isSearchVisible$!: Observable<boolean>;
  public isSearchVisible$$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public goodsResults$: BehaviorSubject<IGoodsItem[]> = new BehaviorSubject<
    IGoodsItem[]
  >([]);

  private searchInput$: Subject<string> = new Subject<string>();

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => (this.searchInput = ''));

    this.isSearchVisible$ = this.isSearchVisible$$
      .asObservable()
      .pipe(delay(200));
    this.searchInput$
      .pipe(
        filter((value) => value.length > 1),
        debounceTime(300),
        switchMap((value) => this.http.getSearchResults(value))
      )
      .subscribe((result) => this.goodsResults$.next(result));
  }

  public showSearchResults() {
    this.searchInput$.next(this.searchInput);
  }

  public showSearchPanel() {
    this.isSearchVisible$$.next(true);
  }

  public hideSearchPanel() {
    this.isSearchVisible$$.next(false);
  }
}
