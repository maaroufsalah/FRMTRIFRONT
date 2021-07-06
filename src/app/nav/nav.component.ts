import { Component, OnInit } from '@angular/core';
import { UserResult } from '../views/account/models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  constructor(public accountService: AccountService) { }

  user: UserResult = null;
  ngOnInit(): void {
    this.user = this.accountService.userValue;
  }

  logOut() {
    this.accountService.logout('/account/log-in');
  }

}
