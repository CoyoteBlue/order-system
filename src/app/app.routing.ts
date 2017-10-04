import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerComponent } from './customer/customer.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'customer', component: CustomerComponent },
/*	{ path: 'portfolio', component: PortfolioComponent, children: FolioRoutes },
	{ path: '', component: HomeComponent }	*/
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = {HomeComponent, MenuComponent}
