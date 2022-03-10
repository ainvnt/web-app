import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './header/menu/menu.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
