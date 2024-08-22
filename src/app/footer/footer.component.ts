import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountOptions } from './footer.model';
import { AccountService } from '../account/account.service';
import { TransactionService } from '../transaction/transaction.service';
import { CurrencyService } from '../currency/currency.service';
import { Currency } from '../currency/currency.model';
import { TransactionType } from '../transaction/transaction.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  
  selectedAccount: number | null = null;
  accountOptions: AccountOptions[] = [];
  totalBalance?: number;
  currencies: Currency[] = [];
  selectedCurrency: string = '';
  transactionType = TransactionType;
  selectedType: TransactionType = TransactionType.EXPENSE;

  constructor(private accountService: AccountService, private transactionService: TransactionService, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accountOptions = accounts.map(account => ({name: account.name, id: account.id}))
    })
    this.accountService.getTotalBalance().subscribe((balance: number) => {
      this.totalBalance = balance
    })
    this.currencyService.getCurrency().subscribe(currencies => {
      this.currencies = currencies;
    })
  }

  onSubmit(form: NgForm) {
      this.transactionService.addTransaction(form.value.description, form.value.amount, this.selectedCurrency, this.selectedType, this.selectedAccount!).subscribe();
      window.location.reload();
  }
}
