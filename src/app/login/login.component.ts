import { IUser } from './../models/user';
import { AuthService } from './../services/auth.service';
import { NotificationService } from './../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [
		'./login.component.css'
	]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loggedInUser: IUser;

	constructor(
		public fb: FormBuilder,
		private router: Router,
		private service: AuthService,
		private notifyingService: NotificationService
	) {}
	ngOnInit() {
		this.loginForm = this.fb.group({
			username: [
				'',
				[
					Validators.required,
					Validators.pattern('[a-zA-Z]*')
				]
			]
		});
	}

	/* Handle form errors in Angular 8 */
	public errorHandling = (control: string, error: string) => {
		return this.loginForm.controls[control].hasError(error);
	};

	public isDisabled = () => {
		return !this.loginForm.valid;
	};

	public submitForm() {
		this.service.getUser(this.loginForm.value.username).subscribe((user) => {
			if (user.id != undefined) {
				this.loggedInUser = user;
				this.router.navigate([
					'home/'
				]);
			}
		});
	}
}
