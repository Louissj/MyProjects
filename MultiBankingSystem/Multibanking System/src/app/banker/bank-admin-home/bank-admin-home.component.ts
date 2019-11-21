import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-bank-admin-home',
  templateUrl: './bank-admin-home.component.html',
  styleUrls: ['./bank-admin-home.component.css']
})
export class BankAdminHomeComponent implements OnInit {
  public curentUser: User;
public currentUser;
public currentBankUser;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    this.currentBankUser = localStorage.getItem('currentBankUser')? JSON.parse(localStorage.getItem('currentBankUser')) : '';
    this.authenticationService.currentUser.subscribe(x => this.curentUser = x);
  }
  banklogout(){
  this.authenticationService.banklogout();
  this.router.navigate(['./']);
}
  ngOnInit() {
  }

  

}
