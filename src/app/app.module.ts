import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
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
  apiKey: 'YzYzYzYzYzYzYzYzYzYzYzYzYz',
  authDomain: 'appname.firebaseapp.com',
  databaseURL: 'https://appname.firebaseio.com',
  storageBucket: 'appname.appspot.com'
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
/*    RouterModule.forRoot(OrderRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
