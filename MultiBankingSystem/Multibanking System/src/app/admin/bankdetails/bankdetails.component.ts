import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  bank;
  bankDetails=[{
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    bankName:"",
    branch:""
  }];
  constructor(
    private _userService:UserService) { }
    
   ngOnInit() {
     console.log("working");
     this._userService.loadData(this.bank).subscribe((data:any) => { 
       console.log("dropdownbinded");
       console.log(data);
       this.bankDetails=data.data;
       });
   }
  
   
 }
 