import { ProductDisplayComponent } from './product-display/product-display.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
	{ path: 'home', component: ProductsListComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'products/display/:id', component: ProductDisplayComponent },
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
