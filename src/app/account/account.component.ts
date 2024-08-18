import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  accounts: Account[] = [];
  userId: string | null = localStorage.getItem('id');

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    if (this.userId) {
      this.accountService.getAccounts(this.userId).subscribe(data => {
      this.accounts = data;
    }) 
    }
  }
}
