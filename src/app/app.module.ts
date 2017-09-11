import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

/*import { OrderRoutes } from './nav/nav.routes';*/
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenudataService } from './menu/menudata.service';
/*import { RoutingModule } from "./routing/routing.module";*/
import { AppRoutingModule, routingComponents } from './app.routing';
import { MainfilterPipe } from './mainfilter.pipe';
import { StarterfilterPipe } from './starterfilter.pipe';
import { DessertfilterPipe } from './dessertfilter.pipe';

/*const OrderRoutes: Routes = [
  { path: '', pathMatch:'full' , redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
]; */

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MenuComponent,
    MainfilterPipe,
    StarterfilterPipe,
    DessertfilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
/*    RouterModule.forRoot(OrderRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
