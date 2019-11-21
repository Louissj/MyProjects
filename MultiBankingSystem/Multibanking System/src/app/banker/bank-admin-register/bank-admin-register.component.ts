import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

export interface Country {
  name: string;
}
export interface State {
  name: string;
}
export interface City {
  name: string;
}
@Component({
  selector: 'app-bank-admin-register',
  templateUrl: './bank-admin-register.component.html',
  styleUrls: ['./bank-admin-register.component.css']
})
export class BankAdminRegisterComponent implements OnInit {
  isLinear = true;
  /*firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  AddressFormGroup:FormGroup;*/
  countryControl = new FormControl('', [Validators.required]);
  stateControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required]);
 email = new FormControl('',[Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
        this.password.hasError('required') ? 'You must enter a value' :
            '';
  }
  hide = true;
  countries: Country[] = [
    {name: 'India'},
    {name: 'Australia'},
    {name: 'USA'},
    {name: 'South Affrica'},
  ];
  states: State[] = [
    {name: 'India'},
    {name: 'Australia'},
    {name: 'USA'},
    {name: 'South Affrica'},
  ];
  cities: City[] = [
    {name: 'India'},
    {name: 'Australia'},
    {name: 'USA'},
    {name: 'South Affrica'},
  ];
  constructor(private _userService:UserService, private _formBuilder:FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router,
    ) { }
    registerForm: FormGroup;
    loading = false;
    submitted = false;
  
  ngOnInit() {
   /* this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.AddressFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });*/
    this.registerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      bankName:['', Validators.required],
      branch:['', Validators.required]
  });
  }

  get fval() { return this.registerForm.controls; }


  reg(){
    this._snackBar.open('Submitted successfully', 'Undo',{
      duration: 2000
    });
    this.router.navigate(['home']);
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
      this._userService.registerBank(this.registerForm.value).subscribe(
        (data)=>{
          this._snackBar.open('Submitted successfully', 'Undo',{
            duration: 2000
          });
          this.router.navigate(['/bankadminlogin']);
       },
        (error)=>{
          alert('Something went wrong!!');
          this.loading = false;
        }
      )
  
    }
  
}
