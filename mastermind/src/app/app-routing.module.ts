import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {WinsComponent} from "./wins/wins.component";
import {LosesComponent} from "./loses/loses.component";

const routes: Routes = [
  {path: "gameconsole", component: AppComponent},
  {path: "wins", component: WinsComponent},
  {path: "loses", component: LosesComponent},
  {path: "**", redirectTo:"gameconsole"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
