import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizItemsComponent } from './quizItems/quizItems.component';
import { QuizItemDetailComponent } from './quizItem-detail/quizItem-detail.component';
import { QuizService } from './quiz.service';
import { NewQuizItemComponent } from './new-quiz-item/new-quiz-item.component'

@NgModule({
  declarations: [
    AppComponent,
    QuizItemsComponent,
    QuizItemDetailComponent,
    NewQuizItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
