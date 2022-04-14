import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { HomeComponent } from './body/home/home.component';
import { ServicesComponent } from './body/services/services.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data : {title: 'Home'} },
    { path: 'aboutus', component: AboutusComponent, data : {title: 'About Us'} },
    { path: 'services', component: ServicesComponent, data: {title: 'Services'} },
    { path: 'contactus', component: ContactusComponent, data: {title: 'Contact Us'} },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }