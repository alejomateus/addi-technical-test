import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ResultsComponent } from './components/results/results.component';
import { ThemeModule } from '../theme/theme.module';


export function childLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    "assets/i18n/home/",
    ".json",
  );
}


@NgModule({
  declarations: [
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ThemeModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: childLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ]
})
export class HomeModule { }
