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

	constructor(public fb: FormBuilder, private router: Router) {}
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
		this.router.navigate([
			'products/'
		]);
	}
}
