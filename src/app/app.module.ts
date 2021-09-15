import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { CoreModule } from './core/core.module';
import { CatalogEffects } from './redux/effects/catalog.effects';
import { CategoriesEffects } from './redux/effects/categories.effects';
import { OrderEffects } from './redux/effects/order.effects';
import { UserProfileEffects } from './redux/effects/user-profile.effects';
import { catalogReducer } from './redux/reducers/catalog.reducers';
import { categoriesReducer } from './redux/reducers/categories.reducers';
import { orderReducer } from './redux/reducers/order.reducers';
import { userProfileReducer } from './redux/reducers/user-profile.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    CatalogModule,
    StoreModule.forRoot(
      {
        userProfileState: userProfileReducer,
        categoriesState: categoriesReducer,
        catalogState: catalogReducer,
        orderState: orderReducer,
      },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
          // strictActionSerializability: true,
          // strictStateSerializability: true,
          strictActionTypeUniqueness: true,
          strictActionWithinNgZone: true,
        },
      }
    ),
    EffectsModule.forRoot([
      CatalogEffects,
      CategoriesEffects,
      OrderEffects,
      UserProfileEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
