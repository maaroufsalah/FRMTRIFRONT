import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenu } from 'src/app/_models/admin/main-menu';
import { MainMenuData } from '../mainMenuData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // menus: MainMenu[] = MainMenuData[];

}
