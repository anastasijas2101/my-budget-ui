import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Component({
  selector: 'accounts',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  accounts: Account[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
      this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    }) 
  }
}
