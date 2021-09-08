import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AvailabilityComponent } from './components/availability/availability.component';
import { RaitingComponent } from './components/raiting/raiting.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AvailabilityComponent, RaitingComponent],
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
  ],
})
export class SharedModule {}
