import { createReducer, on } from '@ngrx/store';
import { getCreditCard, makePayment } from './credit-card.actions';
import { CreditCard } from '../models/credit-card';

export interface CreditCardModel {
  CreditCards: Array<CreditCard>;
}

export const initialState: CreditCard = {
  creditCardNumber: null,
  cardHolder: null,
  expirationDate: null,
  securityCode: null,
  amount: null
}

const _creditCardReducer = createReducer(
  initialState,
  on(getCreditCard, (state:CreditCard) => {
    return {
      ...state,
    }
  }),
  on(makePayment, (state:CreditCard, action) => {
    return {
      ...state,
      creditCardNumber: action.creditCardNumber,
      cardHolder: action.cardHolder,
      expirationDate: action.expirationDate,
      securityCode: action.securityCode,
      amount: action.amount
    }
  })
);

export function creditCardReducer(state:CreditCard, action){
  return _creditCardReducer(state, action);
}
