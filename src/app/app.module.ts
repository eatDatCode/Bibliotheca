import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { GenresComponent } from './genres/genres.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { AddAuthorComponent } from './admin/add-author/add-author.component';
import { AddGenreComponent } from './admin/add-genre/add-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    GenresComponent,
    AdminComponent,
    AboutComponent,
    ToolsComponent,
    AddBookComponent,
    AddAuthorComponent,
    AddGenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
