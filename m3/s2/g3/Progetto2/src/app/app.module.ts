import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages/pages.component';



import { HeaderComponent } from './header/header.component';
import { PostsattiviComponent } from './pages/postsattivi/postsattivi.component';
import { PostsnonattiviComponent } from './pages/postsnonattivi/postsnonattivi.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    CardComponent,
    PagesComponent,
    ButtonComponent,
    HeaderComponent,
    PostsattiviComponent,
    PostsnonattiviComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
