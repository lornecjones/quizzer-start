import {Component, OnInit} from 'angular2/core'
import {Location, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {QuizService} from './quiz-service'
import {Seek} from './Seek'

// an internal class
class Position {
  index:number;
  total:number;

  constructor(maxPosition?:number) {
    this.total = maxPosition || 0;
    this.index = 0;
  }

  setMax(maxPosition:number) {
    this.total = maxPosition;
  }

  seek(direction:Seek) {
    switch (direction) {
      case Seek.Forward:
        if (this.index < this.total) {
          this.index += 1;
        }
        break;
      case Seek.Backward:
        if (this.index) {
          this.index -= 1;
        }
        break;
      case Seek.Beginning:
        this.index = 0;
    }
  }

  getPosition() {
    return this.index;
  }

  getTotal() {
    return this.total;
  }
}

// annotations come from TS
@Component({
  selector: 'player',
  templateUrl: './templates/player.html',
  providers: [QuizService]
})

// classes come from es6
export class PlayerComponent {
  quiz: IQuizList;
  position:Position;

  constructor(private _quizService:QuizService, private _location:Location, private _routeParams: RouteParams) {
    this.position = new Position();
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    let id = +this._routeParams.get('id');
    this.quiz = this._quizService.getQuiz(id);
  }
}

