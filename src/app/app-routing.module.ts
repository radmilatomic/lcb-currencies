import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent }      from './currencies/currencies.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
  { path:'currencies', component: CurrenciesComponent },
  { path:'', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
