import { Component, OnInit } from '@angular/core';import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService, AuthenticationService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  public curentUser:User;
  public currentUser;
  accno;
  bal;
  name;
  BankData:[{
    bankName:"",
    AccountType:"",
    accountnumber:"",
    name:"",
    phone:"",
    balance:""
  }];
  registerForm:FormGroup;
  form: FormGroup;
  loading = false;
  submitted = false;
  constructor(public dialogRef: MatDialogRef<TransactionsComponent>,
    private _formBuilder:FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router,
    private _http:HttpClient,
    private _userService:UserService,
    private authenticationService: AuthenticationService

  ) { 
    this.authenticationService.currentUser.subscribe(x => this.curentUser = x);
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    this.name = this.currentUser.firstName;
  }

  get fval() { return this.registerForm.value }
  BankNames:[{bankName:""}];
  
  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      accno: ['', Validators.required],
      accnoo: ['', Validators.required],
      bal: ['', Validators.required]
  });


this._userService.getBankData(this.name).subscribe((data:any) => { 
console.log("dropdownbinded");
console.log(data);
this.BankNames=data.data;
});

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
      let  updateval={
        "accno":this.accno,
        "bal":this.bal
      }
      this._userService.transactions(this.accno,this.bal).subscribe((data:any) => { 
        console.log("dropdownbinded");
        console.log(data);
        this._snackBar.open('Submitted successfully', 'Undo',{
          duration: 2000
        });
        this.dialogRef.close();
        });
  
  }
}
