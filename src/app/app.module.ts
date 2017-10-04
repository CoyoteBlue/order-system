import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenudataService } from './menu/menudata.service';

import { AppRoutingModule, routingComponents } from './app.routing';
import { MainfilterPipe } from './mainfilter.pipe';
import { StarterfilterPipe } from './starterfilter.pipe';
import { DessertfilterPipe } from './dessertfilter.pipe';
import { CustomerComponent } from './customer/customer.component';
/*import { OrderRoutes } from './nav/nav.routes';*/
/*import { RoutingModule } from "./routing/routing.module";*/

/*const OrderRoutes: Routes = [
  { path: '', pathMatch:'full' , redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
]; */

export const firebaseConfig = {
  apiKey: 'AIzaSyApqfX2f4XSvOwPTai-ZnKrNkkwNEbLheE',
  authDomain: 'appnwmedia.firebaseapp.com',
  databaseURL: 'https://appnwmedia.firebaseio.com',
  storageBucket: 'appnwmedia.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MenuComponent,
    MainfilterPipe,
    StarterfilterPipe,
    DessertfilterPipe,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
/*    RouterModule.forRoot(OrderRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
