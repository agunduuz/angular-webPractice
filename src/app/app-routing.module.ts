import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './components/billing/billing.component';

const routes: Routes = [
  {
    path: 'billing',
    component: BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
