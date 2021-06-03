import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FRMTRIFRONT';
  villes : any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:44366/api/Ville').subscribe(response => {
      this.villes = response;
    }, error => {
      console.log(error);
    })
  }

}
