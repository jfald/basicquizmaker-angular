import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class QuizItem {
    _id:string;
    question : String;
    answers : [{letter: String, answer: string}];
    //   answers : String;
    correct : String;
    section : String;
    status: String;

    constructor(
    ){
      this.question = ""
      this.answers = ""
      this.correct = ""
      this.section = ""
      this.status = ""
    }
}
