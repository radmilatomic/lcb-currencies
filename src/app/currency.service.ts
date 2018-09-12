import { Injectable } from '@angular/core';
import { Currency } from './currency';
import { CURRENCIES } from './mock-currencies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
	currencies:Currency[]=CURRENCIES
  constructor() { }
  getCurrencies(): Observable<Currency[]> {
  return of(this. currencies);
}

deleteCurrency(currency:Currency):Observable<Currency[]>{
  	this.currencies=this.currencies.filter(c=>c!=currency)
  	return of(this.currencies)
  }

}
