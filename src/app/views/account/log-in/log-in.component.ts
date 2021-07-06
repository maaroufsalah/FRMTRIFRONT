import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private accountService: AccountService,
    //private alertService: AlertService,
    private route: Router
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
    });

    // this.spinner.hide();
  }

  login() {
    this.submitted = true;
    if (this.form.invalid)
    return;

    // this.spinner.show();
    this.accountService.login(this.f.username.value, this.f.password.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.submitted = false;
        this.accountService.storeUser(this.f.username.value, response.data.nom, response.data.prenom);
        this.route.navigate(["/home/dashboard"]);
        // this.spinner.hide();
      },
      error: err => {
        console.log(err);
        // this.alerService.error(err.message);
      }
    })

    this.submitted = false;
    // this.spinner.hide();

  }

        // login(){
  //   this.accountService.login(this.model).subscribe(response => {
  //     console.log(response);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
