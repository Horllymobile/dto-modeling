import { TestBed } from '@angular/core/testing';
// import {  Htt } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card';
import { AppState } from 'src/app/state/app.state';
import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let paymentService: PaymentService,
  mockStore;
  beforeEach(() => {
    mockStore = jasmine.createSpyObj('mockStore', ['dispatch'])
    // paymentService = new PaymentService(mockStore)
  });

  describe('dispatch', () => {
      it('should replace empty credit card object', () => {
        let creditCard: CreditCard = {
          creditCardNumber: '20010293004885994',
          cardHolder: 'John Doe',
          expirationDate: new Date(2022,1),
          securityCode: '123',
          amount: 2000
        }
        mockStore.dispatch.and.returnValue(true)
        paymentService.makePayment(creditCard)

        expect(creditCard.creditCardNumber).toBe('20010293004885994');
        expect(creditCard.cardHolder).toBe('John Doe');
        expect(creditCard.expirationDate).toBe(new Date(2022, 1))
        expect(creditCard.securityCode).toBe('123')
        expect(creditCard.amount).toBe(2000);
      })
  })
});
