import { Component, OnInit } from '@angular/core';
import {CURRENCIES} from '../mock-currencies'

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

	currencies=CURRENCIES;
  constructor() { }

  ngOnInit() {
  }

}
