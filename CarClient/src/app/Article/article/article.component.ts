import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../_Service/car-service.service';
import { Car } from 'src/app/_Model/car';
import { Doldur } from 'src/app/_Model/doldur';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  doldurArticle: Doldur;
  constructor(private carService: CarServiceService) { }

  getArticleName() {
    this.carService.getDoldur().subscribe((doldur: Doldur) => {
      this.doldurArticle = doldur;
    }, err => {
      console.log('err of doldurArticle');
      console.log(err);
    });

  }
  ngOnInit() {
   this.getArticleName();
  }

}
