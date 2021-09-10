import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AvailabilityComponent } from './components/availability/availability.component';
import { FavoritesBtnComponent } from './components/favorites-btn/favorites-btn.component';
import { NavigationChainComponent } from './components/navigation-chain/navigation-chain.component';
import { RaitingComponent } from './components/raiting/raiting.component';
import { ToBasketBtnComponent } from './components/to-basket-btn/to-basket-btn.component';
import {
    AvailableAmountHighlightingDirective
} from './directives/available-amount-highlighting.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AvailabilityComponent,
    RaitingComponent,
    ToBasketBtnComponent,
    FavoritesBtnComponent,
    AvailableAmountHighlightingDirective,
    NavigationChainComponent,
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
    ToBasketBtnComponent,
    FavoritesBtnComponent,
    AvailableAmountHighlightingDirective,
    NavigationChainComponent,
  ],
})
export class SharedModule {}
