import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './route.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Nav/nav/nav.component';
import { HeaderComponent } from './Header/header/header.component';
import { ArticleComponent } from './Article/article/article.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailComponent } from './Main/car-detail/car-detail.component';
import { CarEditComponent } from './Main/car-edit/car-edit.component';
import { CarMainComponent } from './Main/car-main/car-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarAddComponent } from './Main/car-add/car-add.component';
import {MatSelectModule} from '@angular/material/select';
import { AlertifyService } from './_Service/alertify.service';
import { CustomerSignupComponent } from './Main/Musteri/customer-signup/customer-signup.component';
import { MatDialogModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CustomerSigninComponent } from './Main/Musteri/customer-signin/customer-signin.component';
import { ListCityComponent } from './Main/list-city/list-city.component';
import { ListBrandComponent } from './Main/list-brand/list-brand.component';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ArticleComponent,
    FooterComponent,
    CarDetailComponent,
    CarEditComponent,
    CarMainComponent,
    CarAddComponent,
    CustomerSignupComponent,
    CustomerSigninComponent,
    ListCityComponent,
    ListBrandComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
 CustomerSignupComponent,
CustomerSigninComponent
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
