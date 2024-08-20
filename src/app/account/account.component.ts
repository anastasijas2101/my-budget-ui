import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';
import { NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.accountService.setAccount(form.value.accountName, form.value.balance, form.value.currency)
  }
}
