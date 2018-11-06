import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { QuizItem } from '../quizitem/quizitem.module';

@Component({
  selector: 'app-new-quiz-item',
  templateUrl: './new-quiz-item.component.html',
  styleUrls: ['./new-quiz-item.component.scss']
})
export class NewQuizItemComponent implements OnInit {

  constructor(
    private quizService: QuizService
  ) { }

  //Declaring the new QuizItem Object and initilizing it
  public newQuizItem: QuizItem = new QuizItem()

  ngOnInit() {
  }

  create() {
    this.quizService.createQuizItem(this.newQuizItem)
      .subscribe((res) => {
        this.newQuizItem = new QuizItem()
     })
  }

}
