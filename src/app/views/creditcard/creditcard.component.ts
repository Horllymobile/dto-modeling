import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PaymentService } from './../../services/payment/payment.service';
import toastr from 'toastr';
@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent implements OnInit {
  creditCardForm: FormGroup;
  // patterns = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$|^4[0-9]{12}(?:[0-9]{3})?$|^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/
  constructor(private FormBuilder: FormBuilder, private paymentService: PaymentService) { }
  errorDate: string;
  ngOnInit(): void {

    this.creditCardForm = this.FormBuilder.group(
      {
        creditCardNumber: ['', [Validators.required,Validators.pattern(/[0-9]{16}/),Validators.maxLength(16),Validators.minLength(16)]],
        cardHolder: ['', [Validators.required, Validators.pattern(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)]],
        expirationDate: ['', [Validators.required]],
        securityCode: ['', [Validators.minLength(3), Validators.maxLength(3),Validators.pattern(/[0-9]{3}/)]],
        amount: ['', [Validators.required, Validators.min(1), Validators.pattern(/[1-9]*/)]]
      }
    )
  }

  submit(){
    const current = new Date().toString().split(' ')[3] + '-' + new Date().toString().split(' ')[2];
    if(this.creditCardForm.get('expirationDate').value > current && this.creditCardForm.get('amount').value > 0){
      this.paymentService.makePayment(this.creditCardForm.value)
      toastr.success('Operation successful card as been added check home page');
      this.creditCardForm.reset();
      return;
    }
    this.errorDate = 'expiration it must be greater than current date'
  }

}
