import { Component, ngOnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-login-confirmation',
	templateUrl: 'confirmation.component.html'
})
export class LoginConfirmationComponent {
	
	@Input()
	headingMessage: string;
	
	ngOnInit() {
		console.debug('The Component has been initialized successfully: ', this, this.headingMessage);
	}
}