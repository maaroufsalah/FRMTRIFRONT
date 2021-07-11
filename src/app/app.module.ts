import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
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
import { ContentComponent } from './shared/layout/content/content.component';
import { LoginLayoutComponent } from './shared/layout/login-layout/login-layout.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { WrapMenuComponent } from './shared/layout/wrap-menu/wrap-menu.component';
import { ToastrModule } from 'ngx-toastr';
// import { NgxSpinnerModule } from 'ngx-spinner';

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
    UpdateComponent,
    ContentComponent,
    LoginLayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    WrapMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    // NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
