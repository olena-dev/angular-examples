import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestService } from "src/app/services/test.service";
import { HttpClientModule } from "@angular/common/http";
import { TestShellComponent } from 'src/app/components/test-shell/test-shell.component';
import { FormsModule } from "@angular/forms";
import { CurrencyRateServiceService } from "src/app/services/currency-rate-service.service";
import { SelectCountryComponent } from './components/select-country/select-country.component';
import { CovidInfoComponent } from './components/covid-info/covid-info.component';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    TestShellComponent,
    SelectCountryComponent,
    CovidInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [ TestService, CurrencyRateServiceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
