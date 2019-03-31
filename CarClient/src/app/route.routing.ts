import { Routes, RouterModule } from '@angular/router';
import { CarMainComponent } from './Main/car-main/car-main.component';
import { CarDetailComponent } from './Main/car-detail/car-detail.component';
import { CarEditComponent } from './Main/car-edit/car-edit.component';
import { CarAddComponent } from './Main/car-add/car-add.component';
import { CustomerSignupComponent } from './Main/Musteri/customer-signup/customer-signup.component';
import { ListCityComponent } from './Main/list-city/list-city.component';
import { ListBrandComponent } from './Main/list-brand/list-brand.component';
export const routes: Routes = [
  { path: '', component: CarMainComponent },
   { path: 'cardetail/:carId', component: CarDetailComponent },
   { path: 'caredit/:carId' , component: CarEditComponent}, // params alan yerle aynı olacak 'carId'
   {path: 'caradd' , component: CarAddComponent},
   {path: 'signup', component: CustomerSignupComponent},
   {path: 'listcity/:cityId', component: ListCityComponent },
   {path: 'listbrand/:brandId', component: ListBrandComponent},
   { path: '**', redirectTo: '', pathMatch: 'prefix' }

];

export const RouteRoutes = RouterModule.forChild(routes);
