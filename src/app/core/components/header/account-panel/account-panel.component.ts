import {
    ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ROUTES } from 'src/app/constants';
import { clearUserInfo, closeLoginModal } from 'src/app/redux/actions/user-profile.actions';
import {
    basketSelector, favoritesSelector, isLoggedSelector, isLoginModalOpened, ordersSelector,
    userInfoSelector
} from 'src/app/redux/selectors/user-profile.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IOrder, IUserProfile } from 'src/app/shared/models/user-profile.model';

import {
    ModalLoginContentComponent
} from '../modals/modal-login-content/modal-login-content.component';

@Component({
  selector: 'app-account-panel',
  templateUrl: './account-panel.component.html',
  styleUrls: ['./account-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPanelComponent implements OnInit, OnDestroy {
  @ViewChild('arrow', { read: ElementRef }) arrow?: ElementRef;

  public userInfo$!: Observable<IUserProfile>;

  public isLogged$!: Observable<boolean>;

  public inFavorites$!: Observable<string[]>;

  public orders$!: Observable<IOrder[]>;

  public inBasket$!: Observable<string[]>;

  public icon$: BehaviorSubject<string> = new BehaviorSubject<string>('login');

  private isLoginModalOpenedSub: Subscription = new Subscription();

  constructor(
    public modal: MatDialog,
    private store: Store<AppState>,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.userInfo$ = this.store.select(userInfoSelector);
    this.isLogged$ = this.store.select(isLoggedSelector);
    this.isLogged$.subscribe((isLogged) => {
      this.icon$.next(isLogged ? 'person' : 'login');
    });
    this.inBasket$ = this.store.select(basketSelector);
    this.inFavorites$ = this.store.select(favoritesSelector);
    this.orders$ = this.store.select(ordersSelector);
    this.isLoginModalOpenedSub = this.store
      .select(isLoginModalOpened)
      .subscribe((isOpened) => {
        if (isOpened) this.openModal();
      });
  }

  public openModal(): void {
    const modalRef = this.modal.open(ModalLoginContentComponent, {
      autoFocus: false,
    });

    modalRef
      .afterClosed()
      .subscribe((result) => this.store.dispatch(closeLoginModal()));
  }

  public arrowUp(): void {
    this.arrow?.nativeElement.classList.add('arrow-up');
  }

  public arrowDown(): void {
    this.arrow?.nativeElement.classList.remove('arrow-up');
  }

  public logout(): void {
    setTimeout(() => this.store.dispatch(clearUserInfo()), 300);
    localStorage.removeItem('token');
  }

  public toBasket(): void {
    this.router.navigate([ROUTES.basket]);
  }

  public ngOnDestroy(): void {
    this.isLoginModalOpenedSub.unsubscribe();
  }
}
