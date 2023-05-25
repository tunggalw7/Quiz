import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-soal',
  templateUrl: './soal.component.html',
  styleUrls: ['./soal.component.scss']
})
export class SoalComponent {
  listOfSoal = [];
  soal: any = [];
  result: any = {};
  currentNumber = 0;
  total = 0;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.getData();
  }

  ngOnInit(): void {
    
  }

  async getData(){    
    this.quizService.getData().subscribe(
      res => {
        this.listOfSoal = res.data.data;
        const getId = this.route.snapshot.params['id'];
        if (getId) {
          this.soal = this.listOfSoal.filter(({groupId})=> groupId === Number(getId))
          this.total = this.soal.length
        }
      },
    );
  }

  handlePrev(){
    this.currentNumber --;
  }

  handleNext(){
    if (this.currentNumber !== this.total) {
      this.currentNumber ++;
    }
  }

  handleChoose(value:any){
    this.soal[this.currentNumber].yourAnswer = value
  }

  handleSubmit(){
    let salah = 0
    let benar = 0
    this.soal.map((item:any)=>{
      if (item.answer === item.yourAnswer) benar ++
      else salah ++
    })

    this.result = {
      group : this.soal[0].group,
      benar : benar,
      salah : salah
    }
    this.handleClear()
  }

  handleClear(){    
    this.soal = []
    this.listOfSoal = []
    this.currentNumber = 0
    this.total = 0
  }
}
