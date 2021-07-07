import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/views/account/account.service';
import { UserResult } from 'src/app/views/account/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  loggedIn: boolean;
  constructor(public accountService: AccountService) { }

  user: UserResult = null;
  ngOnInit(): void {
    this.user = this.accountService.userValue;
  }

  logOut() {
    this.accountService.logOut('/account/log-in');
  }

}
