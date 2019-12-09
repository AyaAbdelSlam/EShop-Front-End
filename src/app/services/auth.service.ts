import { NotificationService } from './notification.service';
import { IUser } from './../models/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseService } from './baseService';

@Injectable({
	providedIn: 'root'
})
export class AuthService extends BaseService {
	constructor(private http: HttpClient, public notfication: NotificationService) {
		super('https://localhost:44333/api/users/', notfication);
	}

	public getUser(name: string): Observable<IUser> {
		return this.http
			.get<IUser>(this.baseUrl + 'name/' + name)
			.pipe(catchError(this.handleError('getUser', {} as IUser)));
	}
}
