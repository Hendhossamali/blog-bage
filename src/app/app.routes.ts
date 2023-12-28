import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { Component } from '@angular/core';
import { BlogPageComponent } from './blog-page/blog-page.component';

export const routes: Routes = [
    {path:'',component: BlogPageComponent},
    {path:'signup' , component:SignupComponent}
];
