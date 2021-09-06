import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CategoriesEffects } from '../redux/effects/categories.effect';
import { UserProfileEffects } from '../redux/effects/user-profile.effects';
import { SharedModule } from '../shared/shared.module';
import { CatalogPanelComponent } from './components/catalog-panel/catalog-panel.component';
import {
    CategoriesSidebarItemComponent
} from './components/catalog-panel/categories-sidebar/categories-sidebar-item/categories-sidebar-item.component';
import {
    CategoriesSidebarComponent
} from './components/catalog-panel/categories-sidebar/categories-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountBtnComponent } from './components/header/account-btn/account-btn.component';
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

@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    HeaderContactsComponent,
    MainNavComponent,
    HeaderNavButtonComponent,
    SearchInputComponent,
    HeaderCategoriesComponent,
    AccountBtnComponent,
    ModalLoginContentComponent,
    FooterComponent,
    CatalogPanelComponent,
    CategoriesSidebarComponent,
    CategoriesSidebarItemComponent,
    CatalogPanelComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    EffectsModule.forFeature([UserProfileEffects, CategoriesEffects]),
  ],
  exports: [HeaderComponent, FooterComponent, CatalogPanelComponent],
})
export class CoreModule {}
