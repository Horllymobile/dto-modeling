import { Injectable } from '@angular/core';
import { CreditCard } from './../../models/credit-card';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as Actions from './../../state/credit-card.actions';


const url = 'api/creditCards';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private Store: Store<AppState>) { }
  makePayment(creditCard:CreditCard){
    this.Store.dispatch(Actions.makePayment(creditCard));
  }
}
