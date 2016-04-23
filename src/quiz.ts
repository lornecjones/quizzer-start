import {Component, OnInit} from 'angular2/core'
import {QuizService} from "./quiz-service";

@Component({
  selector: 'quiz',
  templateUrl: './templates/quiz.html',
  providers: [QuizService]
})

export class QuizComponent implements OnInit {
  quizList: IQuizList[];

  constructor(private _quizService:QuizService) {
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    this.quizList = this._quizService.getQuizzes();
  }
}