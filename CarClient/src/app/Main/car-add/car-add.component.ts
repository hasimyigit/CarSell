import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/_Service/car-service.service';
import { FormBuilder, FormControl , Validators, FormGroup } from '@angular/forms';
import { Car } from 'src/app/_Model/car';
import { Doldur } from 'src/app/_Model/doldur';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
  providers: [CarServiceService]
})
export class CarAddComponent implements OnInit {

  constructor(private carService: CarServiceService ,
              private formBuilder: FormBuilder ) { }
doldur: Doldur;

              car: Car;
              carAddForm: FormGroup;

              createCarForm() {
                this.carAddForm = this.formBuilder.group({
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
  ngOnInit() {
    this.createCarForm();
    this.getDoldur();
  }

  add() {
if (this.carAddForm.valid) {
  this.car = Object.assign({}, this.carAddForm.value);
  console.log(this.car);
  // Todo
  // this.city.userId = this.authService.getCurrentUserId();
  this.carService.addCar(this.car);

}}

getDoldur() {
this.carService.getDoldur().subscribe((data: Doldur) => {
this.doldur = data;
});

}
}
