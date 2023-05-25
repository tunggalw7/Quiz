import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GroupComponent } from './group/group.component';
import { PageGuard } from '../../guard/page.guard';
import { SoalComponent } from './soal/soal.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [PageGuard],
    component: DashboardComponent,
    children: [ 
      {
        path: 'group',
        canActivate: [PageGuard],
        component: GroupComponent,
      },
      {
        path: 'soal/:id',
        canActivate: [PageGuard],
        component: SoalComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
