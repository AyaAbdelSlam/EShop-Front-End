import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseService';
import { NotificationService } from './../services/notification.service';

@Injectable({
	providedIn: 'root'
})
export class ProductsService extends BaseService {
	notification: NotificationService;
	constructor(private http: HttpClient, public notifyService: NotificationService) {
		super('https://localhost:44333/api/products/', notifyService);
	}

	public getProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(this.baseUrl).pipe(catchError(this.handleError('getProducts', [])));
	}

	public getProductById(id: number): Observable<IProduct> {
		return this.http
			.get<IProduct>(this.baseUrl + id)
			.pipe(catchError(this.handleError('getProductById', {} as IProduct)));
	}
}
