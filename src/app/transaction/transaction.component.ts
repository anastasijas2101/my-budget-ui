import { Component, OnInit } from '@angular/core';
import { FilterOptions, Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  accountId?: number;
  selectedFilter: number | null = null;
  transactions: Transaction[] = [];

  filterOptions: FilterOptions[] = [{name: 'All', id: null }];

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data => {
      const newOptions = data.map(account => ({name: account.name, id: account.id}))
      this.filterOptions = [{name: 'All', id: null}, ...newOptions]
  })
    this.route.queryParams.subscribe(params => {
      this.accountId = params['accountId'] ? +params['accountId'] : undefined;
      // this.selectedFilter = this.filterOptions.find(option => option.id === +params['filter']);
      this.loadTransactions();
    })
  }

  loadTransactions(): void {
    if (this.accountId) {
      this.transactionService.getTransactionsByAccount(this.accountId).subscribe(data => {
        this.transactions = data;
      })
    } else {
      this.transactionService.getAllTransactions().subscribe(data => {
        this.transactions = data;
      })
    }
  }

  onFilterChange(): void { 
    console.log(this.selectedFilter);
     
    if (this.selectedFilter === null) {
      this.transactionService.getAllTransactions().subscribe(transactions => {
        this.transactions = transactions;
      })
    } else {
      this.transactionService.getTransactionsByAccount(this.selectedFilter!).subscribe(transactions => {
        this.transactions = transactions;
      })
    }
  }
}
