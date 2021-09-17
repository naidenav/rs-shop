import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BasketItemComponent } from './basket/basket-item/basket-item.component';
import { BasketComponent } from './basket/basket.component';
import { ItemCounterComponent } from './basket/item-counter/item-counter.component';
import {
    OrderingModalContentComponent
} from './basket/ordering-modal-content/ordering-modal-content.component';
import { FavoritesItemComponent } from './favorites/favorites-item/favorites-item.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GoodsFieldComponent } from './goods-field/goods-field.component';
import { GoodsItemComponent } from './goods-field/goods-item/goods-item.component';
import {
    GoodsImageSliderComponent
} from './goods-item-details/goods-image-slider/goods-image-slider.component';
import { GoodsItemDetailsComponent } from './goods-item-details/goods-item-details.component';

@NgModule({
  declarations: [
    GoodsFieldComponent,
    GoodsItemComponent,
    GoodsItemDetailsComponent,
    GoodsImageSliderComponent,
    FavoritesComponent,
    FavoritesItemComponent,
    BasketComponent,
    BasketItemComponent,
    ItemCounterComponent,
    OrderingModalContentComponent,
  ],
  imports: [SharedModule],
})
export class CatalogModule {}
