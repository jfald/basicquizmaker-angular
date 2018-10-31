import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';
import Question from './models/question.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'basicquizmaker-angular';

  constructor(
    private questionService: QuestionService
  ) { }

  //Declaring the new Question Object and initilizing it
  public newQuestion: Question = new Question()

  //An Empty List for the visible question list
  questionList: Question[];
  editQuestions: Question[] = [];

  ngOnInit(): void {
    this.questionService.getQuestions()
      .subscribe(questions => {
        this.questionList = questions
        console.log(questions)
     })
  }

  create() {
    this.questionService.createQuestion(this.newQuestion)
      .subscribe((res) => {
        this.questionList.push(res.data)
        this.newQuestion = new Question()
     })
  }

  editQuestion(question: Question) {
    console.log(question)
    if(this.questionList.includes(question)){
      if(!this.editQuestions.includes(question)){
        this.editQuestions.push(question)
      }else{
        this.editQuestions.splice(this.editQuestions.indexOf(question), 1)
        this.questionService.editQuestion(question).subscribe(res => {
          console.log('Update Successful')
        }, err => {
            this.editQuestion(question)
            console.error('Update Unsuccessful')
        })
      }
    }
  }

  submitQuestion(event, question:Question){
    if(event.keyCode == 13){
      this.editQuestion(question)
    {
  }

  deleteQuestion(question: Question) {
    this.questionService.deleteQuestion(question._id).subscribe(res=> {
      this.questionsList.splice(this.questionsList.indexOf(question), 1);
    })
  }

}
