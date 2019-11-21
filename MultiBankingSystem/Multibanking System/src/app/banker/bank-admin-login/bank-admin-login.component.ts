import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-bank-admin-login',
  templateUrl: './bank-admin-login.component.html',
  styleUrls: ['./bank-admin-login.component.css']
})
export class BankAdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
 
  hide = true;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService) { }


  model={
email:'',
password:''
  };
serverErrorMessags:string;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   // for accessing to form fields
   get fval() { return this.loginForm.controls; }

   onFormSubmit(){
console.log("working");
  this.submitted = true;
  if (this.loginForm.invalid) {
    console.log("invalid form");
    return;
  }

  this.loading = true;
 this.authenticationService.Banklogin(this.fval.email.value, this.fval.password.value)
      .subscribe(
          data => {
            this.router.navigate(['/bankadminhome']);
            console.log("working");
          },
          error => {
            alert("Wrong username and password")
              this.loading = false;
          });
}
}

