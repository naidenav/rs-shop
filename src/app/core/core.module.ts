import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { UserProfileEffects } from '../redux/effects/user-profile.effects';
import { SharedModule } from '../shared/shared.module';
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
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    EffectsModule.forFeature([UserProfileEffects]),
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
