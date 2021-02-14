import {createSelector,createFeatureSelector} from '@ngrx/store';
import { CreditCard } from '../models/credit-card';



// Selecting the feature slice of state by specifying the name
const selectCreditCardFeatures = createFeatureSelector<CreditCard>('creditCard');

// Selector function for selecting a snap shot of the state
export const selectCreditCard = createSelector(
  selectCreditCardFeatures,
  (state:CreditCard) => state
)
