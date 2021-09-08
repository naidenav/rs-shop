import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoodsFieldComponent } from './catalog/goods-field/goods-field.component';

const routes: Routes = [
  {
    path: 'catalog/:categoryId/:subCategoryId',
    component: GoodsFieldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
