import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { AccountService } from '../views/account/account.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  model: any = {};

  constructor(
    //public accountService: AccountService
    ) { }

  ngOnInit(): void {
  }

  // login(){
  //   this.accountService.login(this.model).subscribe(response => {
  //     console.log(response);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  // logout() {
  //   this.accountService.logout('/account/log-in');
  // }

}
