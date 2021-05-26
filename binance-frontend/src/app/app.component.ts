import {Component, OnInit} from '@angular/core';
import {BinanceService} from "./binance.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chartOptions : any = {"animation": false," responsive": true};

  constructor(private binanceSrv : BinanceService) {
  }

  ngOnInit(): void {
    this.binanceSrv.connect();
  }

}
