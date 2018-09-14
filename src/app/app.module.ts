import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCurrencyComponent } from './add-currency/add-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    HomeComponent,
    AddCurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
