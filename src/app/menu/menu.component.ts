import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.model);
  }
}
