import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  faTrash = faTrash;
  faEdit=faEdit;
	currencies:Currency[];
  showForm=false;
  addedCurrencyName:string;
  addedCurrencySymbol:string;
	
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

  showAddForm(): void {
    this.showForm=true;

    
  
}

hideAddForm(): void {
    this.showForm=false;
  }

  onKeyName(event:any){
      this.addedCurrencyName=event.target.value
  }

  onKeySymbol(event:any){
      this.addedCurrencySymbol=event.target.value
  }
  
  addEntry():void{
    var addedCurrency:Currency={
    id:1,
    name:this.addedCurrencyName,
    symbol:this.addedCurrencySymbol
  };
    console.log("addEntry#currencies is clicked")
    this.currencyService.addCurrency(addedCurrency)
      .subscribe(currencies => this.currencies = currencies);
      this.hideAddForm();

  }



}
