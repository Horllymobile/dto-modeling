import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// Components
import { AppComponent } from './app.component';


import { creditCardReducer } from './state/credit-card.reducer';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './views/home/home.component';
import { CreditcardComponent } from './views/creditcard/creditcard.component';

import { InMemoryDataServiceService } from './services/fakedb/in-memory-data-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditcardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({creditCard: creditCardReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataServiceService, {
       dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
