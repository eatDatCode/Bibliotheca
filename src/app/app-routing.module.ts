import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent, BookComponent, PageNotFoundComponent, AuthorsComponent} from './index';



const routes: Routes = [
  { path: 'author', component: AuthorsComponent },
  { path: 'book', component: BookComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
// const appRoutes: Routes = [
 
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
