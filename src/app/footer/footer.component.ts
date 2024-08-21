import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountOptions } from './footer.model';
import { AccountService } from '../account/account.service';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  
  selectedAccount: number | null = null;
  accountOptions: AccountOptions[] = [];
  totalBalance?: number;

  constructor(private accountService: AccountService, private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accountOptions = accounts.map(account => ({name: account.name, id: account.id}))
    })
    this.accountService.getTotalBalance().subscribe((balance: number) => {
      this.totalBalance = balance
    })
  }

  onSubmit(form: NgForm) {
      console.log(form.value);  
      this.transactionService.addTransaction(form.value.description, form.value.amount, form.value.currency, form.value.type, this.selectedAccount!).subscribe();
      window.location.reload();
  }
}
