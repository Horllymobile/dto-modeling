import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CreditCard } from './../../models/credit-card';
import { Observable, throwError} from 'rxjs';
import { map, tap, catchError} from 'rxjs/operators';
import { PaymentError } from 'src/app/models/paymentError';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as Actions from './../../state/credit-card.actions';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http: HttpClient, private store: Store<AppState>) { }

  makePayment(dto:CreditCard){
    this.store.dispatch(Actions.makePayment(dto));
  }
}
