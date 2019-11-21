import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bank } from '../models'
import { User } from '../models';
import { Admin } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private currentBankUserSubject: BehaviorSubject<Bank>;
    public currentBankUser: Observable<Bank>;

    private currentAdminSubject: BehaviorSubject<Admin>;
    public currentAdmin: Observable<Admin>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentBankUserSubject = new BehaviorSubject<Bank>(JSON.parse(localStorage.getItem('currentBankUser')));
        this.currentBankUser = this.currentBankUserSubject.asObservable();

        this.currentAdminSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('currentAdmin')));
        this.currentAdmin = this.currentAdminSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

public get currentBankUserValue(): Bank {
    return this.currentBankUserSubject.value;
}
public get currentAdminValue(): Admin {
    return this.currentAdminSubject.value;
}

    login(email: string, password: string) {
        console.log("inside login")
        return this.http.post<any>(`auth/login`, { email, password })
            .pipe(map(user => {
                if (user && user.token) {
                    console.log("inside login")
                    // store user details in local storage to keep user logged in
                    localStorage.setItem('currentUser', JSON.stringify(user.result));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    Banklogin(email: string, password: string) {
        console.log("inside login")
        return this.http.post<any>(`auth/Banklogin`, { email, password })
            .pipe(map(bank => {
                if (bank && bank.token) {
                    console.log("inside login")
                    // store user details in local storage to keep user logged in
                    localStorage.setItem('currentBankUser', JSON.stringify(bank.result));
                    this.currentUserSubject.next(bank);
                }

                return bank;
            }));
    }

    Adminlogin(username: string, password: string) {
        console.log("inside login")
        return this.http.post<any>(`auth/Adminlogin`, { username, password })
            .pipe(map(admin => {
                if (admin && admin.token) {
                    console.log("inside login")
                    // store user details in local storage to keep user logged in
                    localStorage.setItem('currentAdmin', JSON.stringify(admin.result));
                    this.currentAdminSubject.next(admin);
                }

                return admin;
            }));
    }

    logout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    banklogout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentBankUser');
        this.currentUserSubject.next(null);
    }
    adminlogout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentAdmin');
        this.currentUserSubject.next(null);
    }


    getBankData(username:string){
        console.log("inside login")
        return this.http.post<any>(`auth/getMyAccount`, { username})
            .pipe(map(myaccount => {
                if (myaccount && myaccount.token) {
                    console.log("inside login")
                }
                return myaccount;
            }));
    }
    
}