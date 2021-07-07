import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
import { UserRequest } from '../models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private route: Router,
    private toastrService: ToastrService
    // private spinner: NgxSpinnerService
    ) { }

  form: FormGroup;
  // formOtp: FormGroup;
  submitted: boolean = false;

  get f() { return this.form.controls; }
  // get G() { return this.form.controls; }
  ngOnInit(): void {
    
    // this.spinner.show();
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberme: ['', []]
    });
    // this.spinner.hide();
  }

  login() {
    this.submitted = true;
    if (this.form.invalid)
    return;

    // this.spinner.show();

    let userRequest = new UserRequest();
    userRequest.username =this.f.username.value;
    userRequest.password =this.f.password.value;
    
    this.accountService.login(userRequest).subscribe(response => {
        console.log(response);
        if (!response.succeeded)
          this.toastrService.error(response.message);
          else{
            this.toastrService.success(response.message);
            this.submitted = false;
            // this.accountService.storeUser(this.f.username.value, response.data.nom, response.data.prenom);
            this.route.navigate(["/club/clubs-list"]);
            // this.spinner.hide();
          }
      },
      error => {
        console.log(error);
        this.toastrService.error(error.message);
      })
    this.submitted = false;
    // this.spinner.hide();
  }

}
