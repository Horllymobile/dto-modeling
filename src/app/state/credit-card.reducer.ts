import { createReducer, on } from '@ngrx/store';
import { getCreditCard, makePayment } from './credit-card.actions';
import { CreditCard } from '../models/credit-card';


export const initialState: CreditCard = {
  creditCardNumber: '',
  cardHolder: '',
  expirationDate: null,
  amount: 0,
  securityCode: ''
}

const _creditCardReducer = createReducer(
  initialState,
  on(getCreditCard, (state):CreditCard => {
    return {
      ...state
    }
  }),
  on(makePayment, (state:CreditCard, action:CreditCard):CreditCard => {
    return {
      ...state,
      creditCardNumber: action.creditCardNumber,
      cardHolder: action.cardHolder,
      expirationDate: action.expirationDate,
      amount: action.amount,
      securityCode: action.securityCode
    }
  })
);

export function creditCardReducer(state, action){
  return _creditCardReducer(state, action);
}
