import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import {
    HeaderContactsComponent
} from './components/header/header-contacts/header-contacts.component';
import {
    HeaderNavButtonComponent
} from './components/header/header-nav-button/header-nav-button.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationComponent } from './components/header/location/location.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { HeaderCategoriesComponent } from './components/header/header-categories/header-categories.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    HeaderContactsComponent,
    MainNavComponent,
    HeaderNavButtonComponent,
    SearchInputComponent,
    HeaderCategoriesComponent,
  ],
  imports: [CommonModule, MaterialModule, HttpClientModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
