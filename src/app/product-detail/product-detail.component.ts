import { IProduct } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: [
		'./product-detail.component.css'
	]
})
export class ProductDetailComponent implements OnInit {
	@Input() product: IProduct;
	productImages: string[] = [];
	constructor() {}

	ngOnInit() {
		this.productImages = this.product.images.split('|');
	}
}
