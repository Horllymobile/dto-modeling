import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card';
import { AppState } from 'src/app/state/app.state';
import * as Actions from './../../state/credit-card.actions';
import { selectCreditCard } from '../../state/credit-card.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  creditCard: CreditCard;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.creditCard$ = this.store.select(Selectors.selectCreditCard, )
    this.store.pipe(select(selectCreditCard))
    .subscribe(
      (data) => {
        this.creditCard = data;
      }
    )
  }

}
