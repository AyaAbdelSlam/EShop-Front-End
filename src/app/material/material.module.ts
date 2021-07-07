import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatIconModule,
	MatBadgeModule,
	MatProgressSpinnerModule,
	MatToolbarModule,
	MatFormField,
	MatLabel,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatGridListModule,
	MatSliderModule,
	MatSnackBarModule
} from '@angular/material';

const MaterialComponents = [
	MatButtonModule,
	MatIconModule,
	MatBadgeModule,
	MatProgressSpinnerModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatGridListModule,
	MatSliderModule,
	MatSnackBarModule
];
@NgModule({
	declarations: [],
	imports: [
		MaterialComponents
	],
	exports: [
		MaterialComponents
	]
})
export class MaterialModule {}
