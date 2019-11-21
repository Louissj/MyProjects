import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models';
import { Bank } from '../models';
import {BankSignup } from '../models'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  register(user: User) {
    return this._http.post(`auth/register`, user);

 
}
registerBank(bank: Bank){
  return this._http.post(`auth/registerbank`, bank);
}  
transactions(accno:number,bal:number){
  return this._http.put(`auth/updatebalance`, {accno,bal});
}

bank: any;
  loadData(bank) {
  return this._http.get('auth/getbank');

  }
  loadAccTypeData(type){
    return this._http.get('auth/gettype');
  }
  getAllUsers(){
    return this._http.get('auth/getallusers');
  }
  bankSignup(bankSignup:BankSignup){
    return this._http.post(`auth/banksignup`, bankSignup);
  }
getBankData(bankUser:BankSignup){
    return this._http.post('auth/getmyAccount', bankUser);
  }
  getBanksignup(){
    return this._http.get('auth/getaccountnumber');
  }
}
