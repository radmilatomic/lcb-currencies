import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

	currencies:Currency[];
	
  constructor(private currencyService: CurrencyService) { }
  
  getCurrencies(): void {
  this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies);
}

onDelete(currency:Currency):void{
    console.log("onDelete#currencies is clicked")
    this.currencyService.deleteCurrency(currency)
      .subscribe(currencies => this.currencies = currencies);
  }

  ngOnInit() {
  	this.getCurrencies();
  }

}
