import { createAction, props } from '@ngrx/store';
import { CreditCard } from './../models/credit-card';

export const getCreditCard = createAction(
  '[Credit Card] GET CREDIT CARD'
);
export const makePayment = createAction(
  '[Credit Card] MAKE PAYMENT',
  props<CreditCard>()
)
