import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/_Service/car-service.service';
import { Car } from 'src/app/_Model/car';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {

  constructor(  private activatedRoute: ActivatedRoute,
                private carService: CarServiceService
    ) { }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['arabaUrl', 'markaAd', 'arabaYili', 'arabaKm', 'renkAd' , 'arabaFiyat' , 'arabaId'];
    listData: MatTableDataSource<any>;
    cars: Car[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCarsByBrandId(params.brandId); // route routingle aynı olacak 'carId'
    });
  }
  getCarsByBrandId(brandId) {
    this.carService.getCarsByBrandId(brandId).subscribe(data => {
      this.cars = data;
      console.log(this.cars);
      this.listData = new MatTableDataSource(this.cars);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      });
      }

}
