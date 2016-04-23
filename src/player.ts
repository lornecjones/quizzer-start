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
  directives: [ROUTER_DIRECTIVES],
  providers: [QuizService, ROUTER_PROVIDERS]
})

// classes come from es6
export class PlayerComponent {
  questions:IQuizList;
  answers:Array<boolean[]> = [];  //boolean[][]
  position:Position;
  player:any;
  showAnswers:boolean = false;
  index = 0;
  total = 10;
  right = 0;
  percent = 0;
  responses = [];
  title = "";
  tagLine = "";
  current:IQuestion;

  constructor(private _quizService:QuizService, private _location:Location, private _routeParams:RouteParams) {
    this.position = new Position();
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    let id = +this._routeParams.get('id');
    let data = this._quizService.getQuiz(id);
    this.questions = data;
    this.title = data.title;
    this.tagLine = data.tagLine;
    this.current = data.quiz.questions[0];
    this.total = data.quiz.questions.length;

    this.position.setMax(data.quiz.questions.length);
    this.position.seek(Seek.Beginning);
//    this.seekToQuestion(Seek.Beginning);

    console.info(`Received data from service: ${data.quiz.questions.length}`);
  }

  seekToQuestion(direction:Seek) {
  }

  tabulate() {

  }


  // the 'prev' button was clicked, move to previous question
  previous = () => this.seekToQuestion(Seek.Backward);

  // The 'next' button was clicked, move to the next question
  next = () => this.seekToQuestion(Seek.Forward);

  // The 'score' button was clicked, let's tabulate the answers
  score = () => {
    this.seekToQuestion(Seek.Score);
    this.right = this.tabulate();
    this.showAnswers = true;
    this.seekToQuestion(Seek.Beginning);
  };

}

