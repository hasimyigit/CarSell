import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/_Service/car-service.service';
import { FormBuilder, FormControl , Validators, FormGroup } from '@angular/forms';
import { Car } from 'src/app/_Model/car';
import { Doldur } from 'src/app/_Model/doldur';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  doldur: Doldur;

  car: Car;
  carAddForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private  carService: CarServiceService,
    private router: Router,
    private formBuilder: FormBuilder

    ) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.getCarById(params.carId); // route routingle aynı olacak 'carId'
      this.createCarForm();
      this.getDoldur();
      });
    }
    getDoldur() {
      this.carService.getDoldur().subscribe((data: Doldur) => {
      this.doldur = data;
      });
      }
  getCarById(carID) {
    this.carService.getCarById(carID).subscribe(data => {
      this.car = data;
    });
  }
  createCarForm() {
    this.carAddForm = this.formBuilder.group({
      arabaId: [ '', Validators.required],
      aciklama: [ '', Validators.required],
      arabaFiyat: ['', Validators.required],
      markaId: ['', Validators.required],
      renkId: ['', Validators.required],
      yakitId: ['', Validators.required],
      musteriId: ['', Validators.required],
      sehirId: ['', Validators.required],
      arabaYili: ['', Validators.required],
      arabaKm: ['', Validators.required],
      arabaUrl: ['', Validators.required],
    });

  }
  update() {
    if (this.carAddForm.valid) {
      this.car = Object.assign({}, this.carAddForm.value);
      // Todo
      // this.city.userId = this.authService.getCurrentUserId();
      this.carService.updateCar(this.car);

    }}

  //   Edit() {
  //   this.car = Object.assign( {} , this.carForm.value);
  //   console.log(this.car);
  //   this.carService.updateCar(this.car).subscribe( (data) => {
  //     this.car = data;
  //     console.log('update sucessful');
  //   }, err => {
  //    console.log('update NOT sucessful');
  //   });
  // }
  //  update(car: Car) {
  //  console.log(car);
  //  this.carService.updateCar(car).subscribe( (data) => {
  //  this.car = data;
  //  console.log(car);
  //  });


  //  }
}
