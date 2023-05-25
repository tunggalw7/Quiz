import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import groupJson from './group.json';
import quizJson from './quiz.json';
import { HandleErrorService } from '../helper/handle.error';

@Injectable({ providedIn: 'root' })

export class QuizService { 

    constructor(private http: HttpClient, private handleErrorService: HandleErrorService) {
    } 

    getListGroup(): Observable<any> {
      // Simulating a HTTP request
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({ data: groupJson });
          observer.complete();
        }, 2000);
      }).pipe(
          catchError(err =>
              this.handleErrorService.getError(err),
          )
      ); 
  }   

    getData(): Observable<any> {
        // Simulating a HTTP request
        return new Observable(observer => {
          setTimeout(() => {
            observer.next({ data: quizJson });
            observer.complete();
          }, 2000);
        }).pipe(
            catchError(err =>
                this.handleErrorService.getError(err),
            )
        ); 
    }   
}
