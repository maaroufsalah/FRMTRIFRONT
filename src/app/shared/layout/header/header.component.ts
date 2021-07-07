import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/views/account/account.service';
import { UserResult } from 'src/app/views/account/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  // model: any = {};
  // loggedIn: boolean;
  // constructor(public accountService: AccountService) { }

  // user: UserResult = null;
  ngOnInit(): void {
    // this.user = this.accountService.userValue;
  }

  // logOut() {
  //   this.accountService.logout('/account/log-in');
  // }

}
