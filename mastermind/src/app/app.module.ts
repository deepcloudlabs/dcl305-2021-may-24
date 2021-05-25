import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MoveComponent } from './move/move.component';
import { HistoryComponent } from './history/history.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    MoveComponent,
    HistoryComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
