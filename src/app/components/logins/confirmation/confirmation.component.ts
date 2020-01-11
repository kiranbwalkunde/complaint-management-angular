import { Component, ElementRef } from '@angular/core';

@Component({
	selector: 'app-login-confirmation',
	templateUrl: 'confirmation.component.html'
})
export class LoginConfirmationComponent {
	
	headingMessage: string;
	
	messageBody: string;
	
	loginPageUrl: string;
	
	constructor(nativeElement: ElementRef) {
		var target = nativeElement.nativeElement;
		this.headingMessage = target.getAttribute('data-heading');
		this.loginPageUrl = target.getAttribute('data-login-page-url');
		this.messageBody = target.getAttribute('data-message-body');
	}
}