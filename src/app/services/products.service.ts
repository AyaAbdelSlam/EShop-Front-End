import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseService';

@Injectable({
	providedIn: 'root'
})
export class ProductsService extends BaseService {
	constructor(private http: HttpClient) {
		super(environment.apiUrl + 'products/');
	}

	public getProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(this.baseUrl).pipe(catchError(this.handleError('getProducts', [])));
	}

	public getProductById(id: number): Observable<IProduct> {
		return this.http.get<IProduct>(this.baseUrl + id);
	}
}
