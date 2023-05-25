import { Component, OnInit } from '@angular/core';
import { MyFilterPipe } from '../../../helper/table-filter.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  listGroup : any;
  constructor(private filterPipe : MyFilterPipe, public router: Router, private quizService: QuizService) { }
  
  ngOnInit(): void {
    this.getData();
  }

  async getData(){    
    this.quizService.getListGroup().subscribe(
      res => {
        this.listGroup = res.data.data;
      },
    );
  }

  handleQuiz(id:any){
    this.router.navigate(['/dashboard/soal/', id]);
  }

}
