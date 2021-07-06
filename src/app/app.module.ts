import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ClubListComponent } from './clubs/club-list/club-list.component';
import { ClubDetailComponent } from './clubs/club-detail/club-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './views/club/list/list.component';
import { DetailComponent } from './views/club/detail/detail.component';
import { CreateComponent } from './views/club/create/create.component';
import { UpdateComponent } from './views/club/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    ClubListComponent,
    ClubDetailComponent,
    ListsComponent,
    MessagesComponent,
    LoginComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
