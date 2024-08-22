import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { CurrencyService } from '../currency/currency.service';
import { Currency } from '../currency/currency.model';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  currencies: Currency[] = [];
  selectedCurrency: string = "EUR";
  
  constructor(private settingsService: SettingsService, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe(currencies => {
      this.currencies = currencies;
      console.log(currencies);
    })
  }

  deleteAll(): void {
    if (confirm('Are you sure you want to delete all data?')) {
      this.settingsService.deleteAllData().subscribe(() => {
        alert('All data delete successfully');
        window.location.reload();
      })
    }
  }
}
