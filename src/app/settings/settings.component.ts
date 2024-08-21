import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  
  constructor(private accountService: AccountService) {}

  deleteAll(): void {
    if (confirm('Are you sure you want to delete all data?')) {
      this.accountService.deleteAllData().subscribe(() => {
        alert('All data delete successfully');
        window.location.reload();
      })
    }
  }
}
