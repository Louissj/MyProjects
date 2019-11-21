import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, UserService } from '../../services';
import { User, Admin } from 'src/app/models';
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  userDetail=[{
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    state:"",
    city:"",
    country:""
  }];
  public curentUser: Admin;
public currentUser;
public currentAdmin;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _userService:UserService
  ) { 
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    this.currentAdmin = localStorage.getItem('currentAdmin')? JSON.parse(localStorage.getItem('currentAdmin')) : '';
    this.authenticationService.currentAdmin.subscribe(x => this.curentUser = x);
  }
  adminlogout(){
  this.authenticationService.adminlogout();
  this.router.navigate(['./']);
}

  ngOnInit() {
  }
}