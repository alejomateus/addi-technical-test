import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from '@theme/theme.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppRootReducer, IAppState } from './store/reducers/index.app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'environments/environment.prod';
import { metaReducers } from "./store/hydration/index.reducer";
import { NGFORAGE_CONFIG_PROVIDER } from './ngforage.config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppFacade } from '@store/facades/app.facade';
import { IdentificationTypesEffect } from './store/effects/identification-types.effect';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function tokenGetter() {
  return null;
}

export const AppRootReducerToken = new InjectionToken<
  ActionReducerMap<IAppState>
>("Feature App Component");
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThemeModule,
    StoreModule.forRoot(AppRootReducerToken, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([
      IdentificationTypesEffect
    ]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 50,
    }),
    TranslateModule.forRoot({
      defaultLanguage: "es",
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
      },
      isolate: true,
    }),
  ],
  providers: [
    {
      provide: AppRootReducerToken,
      useValue: AppRootReducer,
    },
    NGFORAGE_CONFIG_PROVIDER,
    AppFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
