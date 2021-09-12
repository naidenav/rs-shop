import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CatalogEffects } from '../redux/effects/catalog.effect';
import { SharedModule } from '../shared/shared.module';
import { GoodsFieldComponent } from './goods-field/goods-field.component';
import { GoodsItemComponent } from './goods-field/goods-item/goods-item.component';
import { GoodsItemDetailsComponent } from './goods-item-details/goods-item-details.component';
import { GoodsImageSliderComponent } from './goods-item-details/goods-image-slider/goods-image-slider.component';

@NgModule({
  declarations: [GoodsFieldComponent, GoodsItemComponent, GoodsItemDetailsComponent, GoodsImageSliderComponent],
  imports: [SharedModule, EffectsModule.forFeature([CatalogEffects])],
})
export class CatalogModule {}
