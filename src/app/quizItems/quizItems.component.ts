import { Component, OnInit } from '@angular/core';
import { QuizItem } from '../quizitem/quizitem.module';
import { QuizService } from '../quiz.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-quizItems',
  templateUrl: './quizItems.component.html',
  styleUrls: ['./quizItems.component.scss']
})

export class QuizItemsComponent implements OnInit {

  constructor( private quizService: QuizService ) { }

  quizItems: QuizItem[];
  currentSlide = 0;
  quizContainer = document.getElementById("quiz");
  slides = document.querySelectorAll(".slide");
  previousButton = document.getElementById("previous");
  nextButton = document.getElementById("next");
  submitButton = document.getElementById("submit");

  getQuizItems(): void {
    this.quizService.getQuizItems()
      .subscribe(quizItems => { this.quizItems = quizItems
      console.log(quizItems)
    })
  }

  showNextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  showPreviousSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  showSlide(n) {
    this.slides[this.currentSlide].classList.remove("active-slide");
    this.slides[n].classList.add("active-slide");
    this.currentSlide = n;

    if (this.currentSlide === 0) {
      this.previousButton.style.display = "none";
    } else {
      this.previousButton.style.display = "inline-block";
    }

    if (this.currentSlide === this.slides.length - 1) {
      this.nextButton.style.display = "none";
      this.submitButton.style.display = "inline-block";
    } else {
      this.nextButton.style.display = "inline-block";
      this.submitButton.style.display = "none";
    }

  }

  buildQuiz() {
    const output = [];

    //for each question...
    this.quizItems.forEach((currentQuestion, questionNumber) => {
      const answers=[];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ... add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question$questionNumber}" value="${letter}">
                  ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    this.quizContainer.innerHTML = output.join("");
  }

  ngOnInit() {
    this.getQuizItems();
    this.buildQuiz();
    this.showSlide(0);
  }

}
