import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
{
	path: 'account',
	component: AccountComponent
}];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
	declarations: [AccountComponent],
	exports: [AccountComponent]
})
export class AccountModule {}