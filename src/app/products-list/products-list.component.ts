import { IProduct } from './../models/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: [
		'./products-list.component.css'
	]
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] = [];
	constructor(private service: ProductsService) {}

	ngOnInit() {
		this.service.getProducts().subscribe((products) => {
			this.products = products;
		});
	}
}
