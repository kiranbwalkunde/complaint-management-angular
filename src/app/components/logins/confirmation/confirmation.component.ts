import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-login-confirmation',
	templateUrl: 'confirmation.component.html'
})
export class LoginConfirmationComponent {
	
	@Input()
	public headingMessage: string;
	
	constructor() {
		console.debug('The Login Confirmation component is ', this);
	}
}