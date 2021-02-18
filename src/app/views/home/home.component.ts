import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card';
import { AppState } from 'src/app/state/app.state';
import { selectCreditCard,  } from '../../state/credit-card.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  creditCard: CreditCard;
  constructor(private Store: Store<AppState>) { }
  sub
  ngOnInit(): void {
    // this.creditCard$ = this.store.select(Selectors.selectCreditCard, )
    this.sub = this.Store.pipe(select(selectCreditCard))
    .subscribe(
      (data) => {
        this.creditCard = data;
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
