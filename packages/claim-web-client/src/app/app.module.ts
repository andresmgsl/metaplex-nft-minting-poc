import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HdWalletAdapterModule } from '@heavy-duty/wallet-adapter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
    CommonModule,
    HdWalletAdapterModule.forRoot({ autoConnect: true }),
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
