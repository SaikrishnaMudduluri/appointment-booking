import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'login', pathMatch: "full" }
];
