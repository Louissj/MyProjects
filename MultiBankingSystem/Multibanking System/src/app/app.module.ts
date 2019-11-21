import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { BankerComponent } from './banker/banker.component';
import {MatFormFieldModule, MatIconModule, MatCardModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatTableModule, MatSortModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerNavComponent } from './customer/customer-nav/customer-nav.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import {MatButtonModule } from '@angular/material';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import {MatDialogModule} from "@angular/material";
import { BankRegistrationComponent } from './customer/bank-registration/bank-registration.component';
import { UserService } from './services/user.service';
import { InterceptorService } from './services/interceptor.service';
import { BankAdminLoginComponent } from './banker/bank-admin-login/bank-admin-login.component';
import { BankAdminRegisterComponent } from './banker/bank-admin-register/bank-admin-register.component';
import { BankAdminHomeComponent } from './banker/bank-admin-home/bank-admin-home.component';
import { BankAdminNavComponent } from './banker/bank-admin-nav/bank-admin-nav.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { CustomerdetailsComponent } from './admin/customerdetails/customerdetails.component';
import { BankdetailsComponent } from './admin/bankdetails/bankdetails.component';
import { AccountOverviewComponent } from './customer/account-overview/account-overview.component';
import { TransactionsComponent } from './customer/transactions/transactions.component';
import { BankUserDetailsComponent } from './banker/bank-user-details/bank-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    BankerComponent,
    CustomerLoginComponent,
    CustomerNavComponent,
    CustomerRegistrationComponent,
    CustomerHomeComponent,
    HomePageComponent,
    BankRegistrationComponent,
    BankAdminLoginComponent,
    BankAdminRegisterComponent,
    BankAdminHomeComponent,
    BankAdminNavComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminNavComponent,
    CustomerdetailsComponent,
    BankdetailsComponent,
    AccountOverviewComponent,
    TransactionsComponent,
    BankUserDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,

  ],
  entryComponents: [
    BankRegistrationComponent,
    CustomerdetailsComponent,
    BankdetailsComponent,
    AccountOverviewComponent,
    TransactionsComponent
  ],
  providers: [UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
