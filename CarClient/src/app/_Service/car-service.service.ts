import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../_Model/car';
import { Observable } from 'rxjs';
import { Musteri } from '../_Model/musteri';
import { Doldur } from '../_Model/doldur';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  baseUrl = 'http://localhost:5000/api/';
  car: Car[];
  id: number;
  constructor(
    private alertifyService: AlertifyService,
    private http: HttpClient,
    private router: Router

    ) { }
    updateCar(car) {
      this.http.post(this.baseUrl + 'arabalar/ArabaGuncelle', car).subscribe();
      this.alertifyService.success('Araba başarıyla Güncellendi.');
      this.router.navigateByUrl('**');
    }
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl + 'arabalar/Liste');

  }
  getCarById(id: number): Observable<Car> {
     return this.http.get<Car>(this.baseUrl + 'arabalar/GetCarById?id=' + id);
 }
 getMusteriById(id: number): Observable<Musteri> {
  return this.http.get<Musteri>(this.baseUrl + 'arabalar/GetMusteriById?id=' + id);
}
addCar(car) {

  this.http.post(this.baseUrl + 'arabalar/ArabaEkle', car).subscribe();
  this.alertifyService.success('Araba başarıyla eklendi.');
  this.router.navigateByUrl('**');
}

getDoldur(): Observable<Doldur> {
  return this.http.get<Doldur>(this.baseUrl + 'arabalar/ArabaDoldur');
}
getCarsByCityId(id: number): Observable<Car[]> {
  return this.http.get<Car[]>(this.baseUrl + 'arabalar/getCarsByCityId?id=' + id);

}
getCarsByBrandId(id: number): Observable<Car[]> {
  return this.http.get<Car[]>(this.baseUrl + 'arabalar/getCarsByBrandId?id=' + id);

}
  }
