import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Component } from '@angular/compiler';
import { Login } from './pages/login/login';
import { SignUp } from './pages/sign-up/sign-up';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'login', component: Login },
    { path: 'sign-up', component: SignUp },

    { path: 'user/:id', loadChildren: () => import('./pages/pages-module').then(m => m.PagesModule) },

    { path: '**', redirectTo: '' }
];
