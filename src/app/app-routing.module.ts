import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequestCardComponent } from './components/request-card/request-card.component';


const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full' },
  {path:"home", component: HomeComponent},
  {path: "card", component: RequestCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
