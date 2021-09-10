import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CategoriesEffects } from '../redux/effects/categories.effect';
import { UserProfileEffects } from '../redux/effects/user-profile.effects';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { AccountPanelComponent } from './components/header/account-panel/account-panel.component';
import {
    CategoriesBtnComponent
} from './components/header/categories-btn/categories-btn.component';
import {
    CategoriesPanelComponent
} from './components/header/categories-btn/categories-panel/categories-panel.component';
import {
    CategoriesSidebarItemComponent
} from './components/header/categories-btn/categories-panel/categories-sidebar/categories-sidebar-item/categories-sidebar-item.component';
import {
    CategoriesSidebarComponent
} from './components/header/categories-btn/categories-panel/categories-sidebar/categories-sidebar.component';
import {
    SubcategoryItemComponent
} from './components/header/categories-btn/categories-panel/subcategory-item/subcategory-item.component';
import {
    HeaderCategoriesComponent
} from './components/header/header-categories/header-categories.component';
import {
    HeaderContactsComponent
} from './components/header/header-contacts/header-contacts.component';
import {
    HeaderNavButtonComponent
} from './components/header/header-nav-button/header-nav-button.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationComponent } from './components/header/location/location.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import {
    ModalLoginContentComponent
} from './components/header/modals/modal-login-content/modal-login-content.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { ApiTokenInterceptor } from './interceptors/api-token.interceptor';
import { BaseApiUrlInterceptor } from './interceptors/base-api-url.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    HeaderContactsComponent,
    MainNavComponent,
    HeaderNavButtonComponent,
    SearchInputComponent,
    HeaderCategoriesComponent,
    AccountPanelComponent,
    ModalLoginContentComponent,
    FooterComponent,
    CategoriesPanelComponent,
    CategoriesSidebarComponent,
    CategoriesSidebarItemComponent,
    CategoriesBtnComponent,
    SubcategoryItemComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    EffectsModule.forFeature([UserProfileEffects, CategoriesEffects]),
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseApiUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiTokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
