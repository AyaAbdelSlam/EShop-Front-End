import { environment } from './../../environments/environment.prod';
import { IUser } from './../models/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private usersURL = environment.apiUrl;

	constructor(private http: HttpClient) {}

	public getUser(name: string) {
		return this.http.get<Observable<IUser[]>>(this.usersURL + 'users/' + name);
	}
}
