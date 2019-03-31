import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { Musteri } from '../_Model/musteri';
import { Router } from '@angular/router';
import { Login } from '../_Model/login';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'http://localhost:5000/api/';
  login: Login;
  musteri: Musteri;

constructor(
  private alertifyService: AlertifyService,
  private http: HttpClient,
  private router: Router
) { }

signIn(musteri) {

  return this.http.post<Musteri>(this.baseUrl + 'arabalar/GirisYap', musteri);

}
signUp(musteri) {

  this.http.post(this.baseUrl + 'arabalar/UyeOl', musteri).subscribe();
  this.alertifyService.success('Uye başarıyla eklendi.');
  this.router.navigateByUrl('**');

}

}
