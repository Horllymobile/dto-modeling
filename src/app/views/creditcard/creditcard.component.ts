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
  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService) { }

  ngOnInit(): void {

    this.creditCardForm = this.formBuilder.group(
      {
        creditCardNumber: ['', [Validators.required,
          Validators.pattern(this.patterns)]],
        cardHolder: ['', [Validators.required]],
        expirationDate: ['', [Validators.required]],
        securityCode: ['', [Validators.minLength(3), Validators.maxLength(3)]],
        amount: ['', [Validators.required, Validators.min(1)]]
      }
    )
  }

  patterns = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$|^4[0-9]{12}(?:[0-9]{3})?$|^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/
  submit(){
    this.paymentService.makePayment(this.creditCardForm.value);
    toastr.success('Operation successful');
  }

}
