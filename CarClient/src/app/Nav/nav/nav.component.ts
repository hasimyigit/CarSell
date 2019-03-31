import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog} from '@angular/material';
import { CustomerSignupComponent } from 'src/app/Main/Musteri/customer-signup/customer-signup.component';
import { CustomerSigninComponent } from 'src/app/Main/Musteri/customer-signin/customer-signin.component';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialog2: MatDialog
   ) { }


   ngOnInit() {
   }
 openDialog(): void {
  const dialogRef = this.dialog.open(CustomerSignupComponent, {

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}
openDialog2(): void {
  const dialogRef2 = this.dialog2.open(CustomerSigninComponent, {

  });

  dialogRef2.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}

}

