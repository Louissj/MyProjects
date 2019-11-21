import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {
  public curentUser: User;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.curentUser = x);
    }

  ngOnInit() {
    
  }
  logout(){
    console.log("inside logout");
    this.authenticationService.logout();
    this.router.navigate(['./login']);
  }
}
