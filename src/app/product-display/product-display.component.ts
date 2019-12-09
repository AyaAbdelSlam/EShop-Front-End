import { ProductsService } from './../services/products.service';
import { IProduct } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-product-display',
	templateUrl: './product-display.component.html',
	styleUrls: [
		'./product-display.component.css'
	]
})
export class ProductDisplayComponent implements OnInit {
	public displayedProduct: IProduct;
	public imagesURL: string[];

	constructor(private route: ActivatedRoute, private service: ProductsService) {}

	ngOnInit() {
		this.route.paramMap
			.pipe(switchMap((params: ParamMap) => this.service.getProductById(+params.get('id'))))
			.subscribe((product) => {
				this.displayedProduct = product;
				this.imagesURL = this.displayedProduct.images.split('|');
			});
	}
}
