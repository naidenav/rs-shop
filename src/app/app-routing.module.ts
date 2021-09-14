import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './catalog/favorites/favorites.component';
import { GoodsFieldComponent } from './catalog/goods-field/goods-field.component';
import {
    GoodsItemDetailsComponent
} from './catalog/goods-item-details/goods-item-details.component';

const routes: Routes = [
  {
    path: 'catalog/:categoryId/:subCategoryId',
    component: GoodsFieldComponent,
  },
  {
    path: 'catalog/:goodsItemId',
    component: GoodsItemDetailsComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
