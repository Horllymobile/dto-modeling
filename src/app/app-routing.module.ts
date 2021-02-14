import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditcardComponent } from './views/creditcard/creditcard.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'payment', component: CreditcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
