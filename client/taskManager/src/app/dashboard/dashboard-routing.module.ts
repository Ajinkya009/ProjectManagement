import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountGuard } from '../account.guard';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AccountGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
