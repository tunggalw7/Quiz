import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GroupComponent } from './group/group.component';
import { MyFilterPipe } from  '../../helper/table-filter.pipe';
import { PageGuard } from 'src/app/guard/page.guard';
import { SoalComponent } from './soal/soal.component';
import { QuizService } from 'src/app/services/quiz.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    MyFilterPipe,
    DashboardComponent,
    GroupComponent,
    SoalComponent, 
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ],
  providers : [
    MyFilterPipe,
    PageGuard,
    QuizService
  ]
})
export class DashboardModule { }
