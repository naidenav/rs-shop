import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { categoriesReducer } from './redux/reducers/categories.reducers';
import { userProfileReducer } from './redux/reducers/user-profile.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot(
      {
        userProfileState: userProfileReducer,
        categoriesState: categoriesReducer,
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
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
