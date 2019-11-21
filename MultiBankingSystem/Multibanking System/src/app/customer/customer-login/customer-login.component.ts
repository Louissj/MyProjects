import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
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
 this.authenticationService.login(this.fval.email.value, this.fval.password.value)
      .subscribe(
          data => {
            this.router.navigate(['/customer-home']);
            console.log("working");
          },
          error => {
            alert("Wrong username and password")
              this.loading = false;
          });
}
}
