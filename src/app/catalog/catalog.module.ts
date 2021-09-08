import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CatalogEffects } from '../redux/effects/catalog.effect';
import { SharedModule } from '../shared/shared.module';
import { GoodsFieldComponent } from './goods-field/goods-field.component';
import { GoodsItemComponent } from './goods-field/goods-item/goods-item.component';

@NgModule({
  declarations: [GoodsFieldComponent, GoodsItemComponent],
  imports: [SharedModule, EffectsModule.forFeature([CatalogEffects])],
})
export class CatalogModule {}
