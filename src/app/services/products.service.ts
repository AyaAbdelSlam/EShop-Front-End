import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private productsUrl: string = '';
	constructor(private http: HttpClient) {}

	getProducts() {
		// this.http.get;
	}
}
