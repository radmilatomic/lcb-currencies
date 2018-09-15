import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
