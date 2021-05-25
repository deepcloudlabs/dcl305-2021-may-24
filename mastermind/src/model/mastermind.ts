import {Move} from "./move";

export class MastermindGame {
  tries: number = 0;
  guess: number = 123;
  gameLevel: number = 3;
  moves: Array<Move> = [];
  counter: number = 60;

  reset() {
    this.tries = 0;
    this.moves.splice(0);
    this.counter = 60;
  }
}
