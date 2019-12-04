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
	MatGridListModule
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
	MatGridListModule
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
