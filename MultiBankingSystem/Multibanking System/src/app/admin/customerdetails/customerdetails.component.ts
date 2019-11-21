import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSort } from '@angular/material';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})


export class CustomerdetailsComponent implements OnInit {
  
  //dataSource = this.userDetails;
  userDetail=[{
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    state:"",
    city:"",
    country:""
  }];

  bankDetails=[{
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    bankName:"",
    brank:""
  }];
  constructor(
   private _userService:UserService) { }

  ngOnInit() {
    console.log("working");
    this._userService.getAllUsers().subscribe((data:any) => { 
      console.log("dropdownbinded");
      console.log(data);
      this.userDetail=data.data;
      });
  }
 
  
}
