import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { AccountGuard } from '../account.guard';

const routes: Routes = [{
  path: 'project/:projectId',
  component: ProjectComponent,
  canActivate: [AccountGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
