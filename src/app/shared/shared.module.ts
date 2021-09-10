import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AvailabilityComponent } from './components/availability/availability.component';
import { BasketBtnComponent } from './components/basket-btn/basket-btn.component';
import { FavoritesBtnComponent } from './components/favorites-btn/favorites-btn.component';
import { RaitingComponent } from './components/raiting/raiting.component';
import {
    AvailableAmountHighlightingDirective
} from './directives/available-amount-highlighting.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AvailabilityComponent,
    RaitingComponent,
    BasketBtnComponent,
    FavoritesBtnComponent,
    AvailableAmountHighlightingDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AvailabilityComponent,
    RaitingComponent,
    BasketBtnComponent,
    FavoritesBtnComponent,
    AvailableAmountHighlightingDirective,
  ],
})
export class SharedModule {}
