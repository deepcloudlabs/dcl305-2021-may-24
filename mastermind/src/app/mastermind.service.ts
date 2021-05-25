import {Injectable} from '@angular/core';
import {MastermindGame} from "../model/mastermind";
import {formatNumber} from "@angular/common";
import {Move} from "../model/move";

@Injectable({
  providedIn: 'root'
})
export class MastermindService {
  mastermindGame = new MastermindGame();
  private secret: number = this.createSecret(this.mastermindGame.gameLevel);

  constructor() {
  }

  play() : void {
      this.mastermindGame.tries++;
      if (this.mastermindGame.guess == this.secret){
         this.mastermindGame.gameLevel++;
         this.mastermindGame.reset();
         this.secret = this.createSecret(this.mastermindGame.gameLevel)
      } else {
        if (this.mastermindGame.tries > 10){
          //TODO: Player loses!
        } else {
          this.mastermindGame.moves.push(this.createMove(this.mastermindGame.guess,this.secret));
        }
      }
  }

  private createSecret(level: number): number {
    const digits: Array<number> = [];
    digits.push(this.createDigit(1, 9));
    while (digits.length < level) {
      let digit: number = this.createDigit(0, 9);
      if (!digits.includes(digit))
        digits.push(digit);
    }
    return digits.reduce((sum, digit) => 10 * sum + digit, 0);
  }

  private createDigit(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private createMove(guess: number, secret: number) : Move {
    let evaluation = "";
    let perfectMatch = 0;
    let partialMatch = 0;
    const guessAsString = guess.toString();
    const secretAsString = secret.toString();
    for (let i=0;i<guessAsString.length;++i){
      const g = guessAsString.charAt(i);
      for (let j=0;j<secretAsString.length;++j){
        const s = secretAsString.charAt(j);
        if (g==s){
            if (i==j)
               perfectMatch++;
            else
              partialMatch++;
        }
      }
    }
    if (perfectMatch==0 && partialMatch==0)
      return new Move(guess,"No Match",perfectMatch,partialMatch);
    if (partialMatch>0)
       evaluation += "-" + partialMatch;
    if (perfectMatch>0)
       evaluation += "+" + perfectMatch;
    return new Move(guess,evaluation,perfectMatch,partialMatch);
  }
}
