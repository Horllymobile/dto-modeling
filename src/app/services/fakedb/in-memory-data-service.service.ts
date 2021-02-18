import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CreditCard } from 'src/app/models/credit-card';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService  implements InMemoryDbService {

  constructor() { }

  createDb(){
    return { creditCards }
  }
}

const current = new Date().toString().split(' ')[3] + '-' + new Date().toString().split(' ')[2];

const creditCards:CreditCard[] = [
  {
    creditCardNumber: '1234567890123456',
    cardHolder: 'James Abraham',
    expirationDate: new Date(2022,3),
    securityCode: '122',
    amount: 2000
  }
];
