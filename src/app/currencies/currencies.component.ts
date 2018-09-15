import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';
import { faTrash,faEdit,faPlus,faTimes,faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})

export class CurrenciesComponent implements OnInit {
  faTrash = faTrash;
  faEdit=faEdit;
  faPlus=faPlus;
  faTimes=faTimes;
  faCheck=faCheck;
	currencies:Currency[];
  showForm=false;
  inputName:string;
  inputSymbol:string;
	
  constructor(private currencyService: CurrencyService) { }
  
  getCurrencies(): void {
    this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies);
  }

  onDelete(currency:Currency):void{
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
    this.inputName='';
    this.inputSymbol='';
  }

  addEntry():void{
    if(this.inputName!=''&&this.inputSymbol!=''&&this.inputName!=null&&this.inputSymbol!=null){
        var addedCurrency:Currency={
          id:1,
          name:this.inputName,
          symbol:this.inputSymbol
        };
        this.currencyService.addCurrency(addedCurrency)
          .subscribe(currencies => this.currencies = currencies);
        this.hideAddForm();
        
    }
  }

}
