import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { apiServices } from './api.services';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [apiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
