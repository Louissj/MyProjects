import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService, AuthenticationService } from 'src/app/services';
import { User } from 'src/app/models';

export interface Bank {
  name: string;
}
export interface Type {
  name: string;
}
@Component({
  selector: 'app-bank-registration',
  templateUrl: './bank-registration.component.html',
  styleUrls: ['./bank-registration.component.css']
})

export class BankRegistrationComponent implements OnInit {
bankName;
AccoutType;

registerForm:FormGroup;
  form: FormGroup;
  description:string;
  isLinear = false;
  countryControl = new FormControl('', [Validators.required]);
  hide = true;
  BankName:String;
  public curentUser: User;
  public currentUser;
  public currentuser;
  public banks: Array<any> = [];
  public types:Array<any>=[];
  bank: Bank[] = [
    {name: 'SBI'},
    {name: 'SIB'},
    {name: 'HDFC'},
    {name: 'ICICI'},
  ];
  type: Type[] = [
    {name: 'Savings Account'},
    {name: 'Current Account'},
    {name: 'Salary Account'},
    {name: 'Demat Account'},
  ];
  loading = false;
  submitted = false;
  constructor(public dialogRef: MatDialogRef<BankRegistrationComponent>,
    private _formBuilder:FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router,
    private _http:HttpClient,
    private _userService:UserService,
    private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUser.subscribe(x => this.curentUser = x);
      this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }
BankNames:[{bankName:""}];
AccountTypes:[{AccountType:""}];
  ngOnInit() {
    this.dialogRef.updatePosition({ });
    this.registerForm = this._formBuilder.group({
      AccountType: ['', Validators.required],
      bankName: ['', Validators.required],
      accountnumber: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
  });
  
  const bank = {
    banks: this.bank
}

console.log(bank);


this._userService.loadData(bank).subscribe((data:any) => { 
console.log("dropdownbinded");
console.log(data);
this.BankNames=data.data;
});
const type = {
  types: this.type
}
this._userService.loadAccTypeData(type).subscribe((data:any) => { 
  console.log("dropdownbinded");
  console.log(data);
  this.AccountTypes=data.data;
});
  }
 

  onNoClick(): void {
    this.dialogRef.close();
  }
  onFormSubmit(){
    this.submitted = true;
      console.log("inside onSbm");
      console.log(this.registerForm.value);
      // return for here if form is invalid
      if (this.registerForm.invalid) {
        console.log("invalid form");
        return;
      }
      this.loading = true;
      this._userService.bankSignup(this.registerForm.value).subscribe(
        (data)=>{
          console.log("inside");
          this._snackBar.open('Submitted successfully', 'Undo',{
            duration: 2000
          });
          this.dialogRef.close();
       },
        (error)=>{
          alert('Something went wrong!!');
          this.loading = false;
        }
      )
  
  }
}
