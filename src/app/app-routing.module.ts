import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { BookDetailsResolverService } from './books/components/book-details/book-details.resolver.service';
import { BookListResolverService } from './books/components/books-list/book-list.resolver.service';
import { BooksComponent } from './books/components/books/books.component';


const routes: Routes = [
  { path: '',redirectTo: '/books', pathMatch: 'full'},  
  { path: 'login', component: LoginComponent},  
  { path: 'register', component: RegisterComponent},
  { path: 'books', component: BooksComponent,resolve:[BookListResolverService], children:[
    { path: 'detail/:id', component: BookDetailsComponent, resolve:{book:BookDetailsResolverService}},
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
