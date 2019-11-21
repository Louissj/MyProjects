import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerNavComponent } from './customer/customer-nav/customer-nav.component';
import { BankAdminHomeComponent } from './banker/bank-admin-home/bank-admin-home.component';
import { BankAdminLoginComponent } from './banker/bank-admin-login/bank-admin-login.component';
import { BankAdminRegisterComponent } from './banker/bank-admin-register/bank-admin-register.component';
import { BankAdminNavComponent } from './banker/bank-admin-nav/bank-admin-nav.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CustomerdetailsComponent } from './admin/customerdetails/customerdetails.component';
import { BankdetailsComponent } from './admin/bankdetails/bankdetails.component';



const routes: Routes = [

  {path:'', component:HomePageComponent},
  {path:'login', component:CustomerLoginComponent},
  {path:'register', component:CustomerRegistrationComponent},
  {path:'customer', component:CustomerNavComponent},  
  {path:'bankadmin',component:BankAdminNavComponent},
  {path:'bankadminhome',component:BankAdminHomeComponent},
  {path:'bankadminlogin',component:BankAdminLoginComponent},
  {path:'customer-home', component:CustomerHomeComponent},
  {path:'bankadminlogin', component:BankAdminLoginComponent},
  {path:'bankregistration', component:BankAdminRegisterComponent},
  {path:'bankadminhome', component:BankAdminHomeComponent},
  {path: 'admin' , component:AdminNavComponent },
  {path: 'adminlogin' , component:AdminLoginComponent },
  {path:'admin-home', component:AdminHomeComponent},
  {path:'user-details', component:CustomerdetailsComponent},
  {path:'bank-details', component:BankdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
