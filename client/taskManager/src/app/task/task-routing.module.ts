import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { AccountGuard } from '../account.guard';


const routes: Routes = [{
  path: 'project/:projectId/task/:taskId',
  component: TaskComponent,
  canActivate: [AccountGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
