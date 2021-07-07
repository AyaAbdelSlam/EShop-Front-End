import { environment } from './../../environments/environment.prod';
import { NotificationService } from './notification.service';
import { IUser } from '../shared/models/user';
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
		super(environment.apiUrl + 'users/', notfication);
	}

	public getUser(name: string): Observable<IUser> {
		return this.http
			.get<IUser>(this.baseUrl + 'name/' + name)
			.pipe(catchError(this.handleError('getUser', {} as IUser)));
	}
}
