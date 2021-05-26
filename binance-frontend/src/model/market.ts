import {Trade} from "./trade";

export class Market {
    trades : Array<Trade> = [];
    tradesCharData : Array<any> = [
      {
        data : [],
        label: "BTCUSDT"
      }
    ];
    tradesChartLabels : Array<string> = [];
}
