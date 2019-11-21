import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { BankRegistrationComponent } from '../bank-registration/bank-registration.component';
import { Router} from '@angular/router';
import { AuthenticationService } from 'src/app/services';
import { User } from 'src/app/models';
import { AccountOverviewComponent } from '../account-overview/account-overview.component';
import { TransactionsComponent } from '../transactions/transactions.component';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  public curentUser: User;
  public currentUser;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.curentUser = x);
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
   }

 
  ngOnInit() {
  }
  openDialog(){
    const dialogRef = this.dialog.open(BankRegistrationComponent, {
      width: '500px',
      height: '550px'
    }); 
  }
  openAccountOverview(){
    const dialogRef = this.dialog.open(AccountOverviewComponent, {
      width: '500px',
      height: '550px'
    }); 
  }
  openTransactions(){
    const dialogRef = this.dialog.open(TransactionsComponent, {
      width: '500px',
      height: '550px'
    }); 
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['./']);
  }
}
