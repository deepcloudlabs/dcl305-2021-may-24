import { Injectable } from '@angular/core';
import {Market} from "../model/market";
import * as io from 'socket.io-client';
import {Trade} from "../model/trade";

@Injectable({
  providedIn: 'root'
})
export class BinanceService {
  private readonly webSocketUrl = "ws://localhost:5555";
  private marketData : Market = new Market();

  private socket = io(this.webSocketUrl);

  constructor() { }
  connect(){
    this.socket.on("ticker", (trade : Trade) => {
      console.log(trade);

    });
  }
  get market() : Market {
    return this.marketData;
  }
}
