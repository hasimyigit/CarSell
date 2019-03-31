import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/_Service/car-service.service';
import { Car } from 'src/app/_Model/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-main',
  templateUrl: './car-main.component.html',
  styleUrls: ['./car-main.component.css']
})
export class CarMainComponent implements OnInit {
  carList: Car[];
  carDetail: Car;
  secilenCar: Car;

  giris = {
    kullaniciAdi: 'Tom',
    sifre: 'Hanks'
 };
  constructor(
    private carService: CarServiceService,
    private router: Router
  ) { }
  loadCar() {
    // tslint:disable-next-line: no-debugger
      debugger;
    // subscribe başarılı olduysa demek
      this.carService.getCars().subscribe((data: Car[]) => {
        this.carList = data;
      }, err => {
        console.log('err of Car-List');
        console.log(err);
      });
    }
      // getCar(car: Car) {
      //   this.carDetail = car;
      //   // this.router.navigateByUrl('cardetail');
      // }
      ngOnInit() {
        this.loadCar();
      }
      onSelect(car: Car): void {
        this.secilenCar = car;
      }
}

