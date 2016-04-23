import {Component, OnInit} from 'angular2/core'
import {Location, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {QuizService} from './quiz-service'
import {Seek} from './Seek'

// annotations come from TS
@Component({
  selector: 'player',
  templateUrl: './templates/player.html',
  providers: [QuizService]
})

// classes come from es6
export class PlayerComponent {
  quiz: IQuizList;

  constructor(private _quizService:QuizService) {
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    this.quiz = this._quizService.getQuiz(1);
    debugger;
  }

}

