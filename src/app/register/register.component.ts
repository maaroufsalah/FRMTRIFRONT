import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() rolesFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  roles: any;

  constructor(private http: HttpClient,private accountService: AccountService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      // console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  getRoles() {
    this.http.get('https://localhost:44366/api/Account/getroles')
      .subscribe(roles => {
        this.roles = roles;
      });
  }

  cancel() {
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
