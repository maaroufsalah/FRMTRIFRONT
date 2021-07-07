import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubDetailComponent } from './clubs/club-detail/club-detail.component';
import { ClubListComponent } from './clubs/club-list/club-list.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './shared/layout/content/content.component';
import { LoginLayoutComponent } from './shared/layout/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/account/log-in',
  },
  {
    path: 'account',
    component: LoginLayoutComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule)
      },
    ]
  },
  {
    path: 'club',
    component: ContentComponent,
    children : [
      {
        path: 'clubs-list',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./views/club/club.module').then(m => m.ClubModule)
      }
    ]
  },
  // {path: 'home', component: HomeComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'clubs', component: ClubListComponent},
  // {path: 'clubs/:id', component: ClubDetailComponent},
  // {path: 'lists', component: ListsComponent},
  // {path: 'messages', component: MessagesComponent},
  // {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
