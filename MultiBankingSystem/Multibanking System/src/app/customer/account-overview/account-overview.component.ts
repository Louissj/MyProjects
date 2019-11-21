import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthenticationService, UserService } from 'src/app/services';
import { User, BankSignup } from 'src/app/models';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {
public curentUser:User;
public currentUser;
name;
BankData:[{
  bankName:"",
  AccountType:"",
  accountnumber:"",
  name:"",
  phone:"",
  balance:""
}];
  constructor(
    public dialogRef: MatDialogRef<AccountOverviewComponent>,
    private _userService:UserService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.curentUser = x);
      this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
      this.name = this.currentUser.bankName;
    }

  ngOnInit() {
    this._userService.getBankData(this.name).subscribe((data:any) => { 
      console.log("dropdownbinded");
      console.log(data);
      this.BankData=data.data;
      });
  }

}
