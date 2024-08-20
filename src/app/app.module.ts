import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { provideHttpClient } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavBarComponent,
    FooterComponent,
    TransactionComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", redirectTo:'accounts', pathMatch: 'full'},
      {path: "accounts", component: AccountComponent},
      {path: "transactions" , component: TransactionComponent},
      {path: "settings", component: SettingsComponent}
    ])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }