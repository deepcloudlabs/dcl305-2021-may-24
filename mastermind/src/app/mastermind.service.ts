import { Injectable } from '@angular/core';
import {MastermindGame} from "../model/mastermind";

@Injectable({
  providedIn: 'root'
})
export class MastermindService {
  mastermindGame = new MastermindGame();
  private secret : number = 123;
  constructor() { }
}
