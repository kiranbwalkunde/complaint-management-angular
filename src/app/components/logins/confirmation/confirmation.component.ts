import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-login-confirmation',
	templateUrl: 'confirmation.component.html'
})
export class LoginConfirmationComponent {
	
	@Input()
	headingMessage: string;
}