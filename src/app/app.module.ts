import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeService } from './Service/home.service';
import { AuthorService, BookService } from './Service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    PageNotFoundComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BookService,
    HomeService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
