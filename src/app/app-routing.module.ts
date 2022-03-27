import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { BooksComponent } from './books/components/books/books.component';


const routes: Routes = [
  { path: ' ',redirectTo: '/books', pathMatch: 'full'},  
  { path: 'login', component: LoginComponent},  
  { path: 'register', component: RegisterComponent},
  { path: 'books', component: BooksComponent, children:[
    { path: 'detail/{id}', component: BookDetailsComponent},
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
