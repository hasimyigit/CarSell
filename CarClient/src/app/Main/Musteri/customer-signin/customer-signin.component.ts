import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , Validators, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/_Service/customer.service';
import { Musteri } from 'src/app/_Model/musteri';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.css']
})
export class CustomerSigninComponent implements OnInit {

  constructor(
    private customerService: CustomerService ,
    private formBuilder: FormBuilder,
  ) { }
  signInForm: FormGroup;
  musteri: Musteri;
  ngOnInit() {
    this.createSignInForm();
  }
  signIn() {
    if (this.signInForm.valid) {
      this.musteri = Object.assign({}, this.signInForm.value);
      console.log(this.musteri);
      // Todo
      // this.city.userId = this.authService.getCurrentUserId();
      this.customerService.signIn(this.musteri).subscribe((data: Musteri) => {
        this.musteri = data;
        console.log(this.musteri);
        sessionStorage.setItem('giris', JSON.stringify(this.musteri));
        if (sessionStorage.setItem) {
console.log('Giris Yapildi');
        }
      }, err => {
        console.log('err of Login');
        console.log(err);
      });
    }}
  createSignInForm() {
    this.signInForm = this.formBuilder.group({
      kullaniciAdi: ['', Validators.required],
      kullaniciSifresi: ['', Validators.required]
    });

}

}
