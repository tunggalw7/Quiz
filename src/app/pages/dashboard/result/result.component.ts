import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() myResult: any; //state management angular

  constructor(public router: Router) { }
  
  ngOnInit(): void {
  }

  handleGroup(){
    this.router.navigate(['/dashboard/group/']);
  }
}
