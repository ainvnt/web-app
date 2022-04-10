import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './header/menu/menu.component';
import { MaterialModule } from './material/material.module';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CarouselItemElementDirective } from './carousel/carousel-item-element.directive';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './body/home/home.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { ServicesComponent } from './body/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MenuComponent,
    ScrollToTopComponent,
    CarouselComponent,
    CarouselItemDirective, 
    CarouselItemElementDirective, AboutusComponent, HomeComponent, ContactusComponent, ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
