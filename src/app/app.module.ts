import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


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
import { AddAuthorService, AddGenreService } from './service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
// import { JwtInterceptor } from './jwt.interceptor';

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
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    ReactiveFormsModule,
    FormsModule
>>>>>>> aba45e1c1a8e64313b0c220b965c151e4c9c31c4
  ],
  providers: [AddAuthorService,
            AddGenreService,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: JwtInterceptor,
              multi: true
            },
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
