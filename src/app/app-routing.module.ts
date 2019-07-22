import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent, BooksComponent, AuthorsComponent, GenresComponent, AdminComponent , AboutComponent} from './index';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { AddGenreComponent } from './admin/add-genre/add-genre.component';
import { AddAuthorComponent } from './admin/add-author/add-author.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
     path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path: '',
        redirectTo: 'add-a-book',
        pathMatch: 'full'
      },
      {
        path: 'add-a-book',
        component: AddBookComponent
      },
      {
        path: 'add-an-author',
        component: AddAuthorComponent,
      },
      {
        path: 'add-a-genre',
        component: AddGenreComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
// const appRoutes: Routes = [

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
