import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/_Model/car';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/_Service/car-service.service';
import { Musteri } from 'src/app/_Model/musteri';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarServiceService]
})
export class CarDetailComponent implements OnInit {
  car: Car;
  saticiId: number;
  musteri: Musteri;
  cars: Car[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarServiceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.getCarById(params.carId); // route routingle aynı olacak 'carId'
    this.getCars();
    });
  }
  getCarById(carID) {
    this.carService.getCarById(carID).subscribe(data => {
      this.car = data;
      this.getMusteriById(this.car.musteriId); // arabayı çekerken  satıcıyıda çekiyoruz
    });
  }
    getMusteriById(id: number) {
     this.carService.getMusteriById(id).subscribe(data => {
      this.musteri = data;
     });
    }
    getCars() {
      this.carService.getCars().subscribe(data => {
        this.cars = data;
    });

}
goBack(): void {
  this.location.back();
}
goTop(): void {
  window.scrollTo(0, 0);
}
}
