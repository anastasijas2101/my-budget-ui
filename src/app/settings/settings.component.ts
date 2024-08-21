import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  
  constructor(private settingsService: SettingsService) {}

  deleteAll(): void {
    if (confirm('Are you sure you want to delete all data?')) {
      this.settingsService.deleteAllData().subscribe(() => {
        alert('All data delete successfully');
        window.location.reload();
      })
    }
  }
}
