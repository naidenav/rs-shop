import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './catalog/basket/basket.component';
import { FavoritesComponent } from './catalog/favorites/favorites.component';
import { GoodsFieldComponent } from './catalog/goods-field/goods-field.component';
import {
    GoodsItemDetailsComponent
} from './catalog/goods-item-details/goods-item-details.component';
import { WaitingListComponent } from './catalog/waiting-list/waiting-list.component';

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
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'waitingList',
    component: WaitingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
