import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserResult } from './models/user';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:44366/api/';
  private CURRENT_USER: string = 'CURRENT_USER';
  public user: Observable<UserResult>;

  // private currentUserSource = new ReplaySubject<User>(1);
  // currentUser$ = this.currentUserSource.asObservable();
  roles: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) //private errorHandler: ErrorHandlerService
  {}

  //Old Login :
  // login(model: any){
  //   return this.http.post(this.baseUrl + 'account/login', model).pipe(
  //     map((response : User) => {
  //       const user = response;
  //       if (user) {
  //         localStorage.setItem('user', JSON.stringify(user));
  //         this.currentUserSource.next(user);

  //       }
  //     })
  //   );
  // }

  login(username: string, password: string) {
    return this.http
      .post(this.baseUrl + 'account/login', {
        username: username,
        password: password,
      })
      .pipe(
        map((response: UserResult) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            // this.currentUserSource.next(user);
          }
        })
      );
  }

  storeUser(
    username: string,
    nom: string = '',
    prenom: string = '',
    email: string = ''
  ) {
    let _username = '' + username;
    let user = new UserResult(_username, nom, prenom, email);
    this.doRemoveUser();
    this.doSetCurrentUser(user);
  }

  storeUser_(user: UserResult){
    this.doRemoveUser();
    this.doSetCurrentUser(user);
  }

  public doRemoveUser() {
    localStorage.removeItem(this.CURRENT_USER);
  }

  private doSetCurrentUser(usr: UserResult) {
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(usr));
  }

  public get userValue(): UserResult {
    let user: UserResult = JSON.parse(localStorage.getItem(this.CURRENT_USER));
    return user;
  }

  register(model: any) {
    console.log(model);
    return this.http.post(this.baseUrl + 'Account/register', model).pipe(
      map((user: UserResult) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          // this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  
  logout(url: string) {
    localStorage.removeItem(this.CURRENT_USER);
    this.router.navigate([url]);
    // this.currentUserSource.next(null);
  }

  // getRoles() {
  //   // this.http.get('https://localhost:44366/api/Account/GetAllRoles')
  //   this.http.get(this.baseUrl + 'Account/getroles')
  //     .subscribe(roles => {
  //       this.roles = roles;
  //       console.log(this.roles);
  //     });
  // }

  // setCurrentUser(user: User) {
  //   this.currentUserSource.next(user);
  // }
}
