import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';
import { NgForm } from '@angular/forms';
import { CurrencyService } from '../currency/currency.service';
import { Currency } from '../currency/currency.model';

@Component({
  selector: 'accounts',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  accounts: Account[] = [];
  currencies: Currency[] = [];
  selectedCurrency: string = '';

  constructor(private accountService: AccountService, private currencyService: CurrencyService){}

  ngOnInit(): void {
      this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    }) 
      this.currencyService.getCurrency().subscribe(currencies => {
      this.currencies = currencies;
    })
  }

  onSubmit(form: NgForm) {
    this.accountService.setAccount(form.value.name, form.value.balance, this.selectedCurrency).subscribe()
    window.location.reload()
  }
}
