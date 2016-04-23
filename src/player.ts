import {Component, OnInit} from 'angular2/core'
import {Location, RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {QuizService} from './quiz-service'
import {Seek} from './Seek'

// annotations come from TS
@Component({
  selector: 'player',
  templateUrl: './templates/player.html'
})

// classes come from es6
export class PlayerComponent {

  constructor() {
  }

  clickHandler(event) {
    alert('Bingo!');
  }
}

