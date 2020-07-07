import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { MovieDisplayComponent } from './home/movie-display/movie-display.component';
import { SearchComponent } from './home/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    MovieDisplayComponent,
    SearchComponent,

    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
