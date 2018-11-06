import { QuizItem } from './quizitem/quizitem.module';
import { Observable } from 'rxjs/Rx';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import { map } from 'rxjs/operators';

@Injectable()
export class QuizService {

  api_url = 'http://localhost:3000';
  questionUrl = `${this.api_url}/api/questions`;

  constructor(
    private http: HttpClient
  ) { }

  //Delaring the new QuizObject and initilizing it
  public newQuizItem: QuizItem = new QuizItem()

  //An Empty List for the quizItem List
  quizItemList: QuizItem[];
  editQuizItems: QuizItem[] = [];

  //Create quizItem, takes a QuizItem Object
  createQuizItem(quizItem: QuizItem): Observable<any>{
    //returns the observable of http post request
    return this.http.post(`${this.questionUrl}`, quizItem);
  }

  //Read quizItems, takes no arguments
  getQuizItems(): Observable<QuizItem[]>{
    return this.http.get(this.questionUrl)
    .pipe( map(res  => {
        return res["data"].docs as QuizItem[];
    }));
  }

  //Update quizItem, takes a QuizItem Object as parameter
  editQuizItem(quizItem: QuizItem){
    let editUrl = `${this.questionUrl}`
    //returns the observable of http put request
    return this.http.put(editUrl, quizItem);
  }

  deleteQuizItem(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.questionUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
