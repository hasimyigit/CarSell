import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/_Service/customer.service';
import { FormBuilder, FormControl , Validators, FormGroup } from '@angular/forms';
import { Musteri } from 'src/app/_Model/musteri';
@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  signUpAddForm: FormGroup;
  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
    ) { }
musteri: Musteri;
  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm() {
  this.signUpAddForm = this.formBuilder.group({
    musteriAd: ['', Validators.required],
    musteriSoyad: ['', Validators.required],
    eMail: ['', Validators.required ],
    musteriTelNo: ['', Validators.required],
    kullaniciAdi: ['', Validators.required],
    kullaniciSifresi: ['', Validators.required]
  });
  }

  signUp() {
    if (this.signUpAddForm.valid) {
      this.musteri = Object.assign({}, this.signUpAddForm.value);
      console.log(this.musteri);
      this.customerService.signUp(this.musteri);
    }}

}
