import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  userIconPath: string;

	userIdLabel: string;
	
	userIdDescription: string;

	passwordLabel: string;
	
	loginButtonLabel: string;

	dashboardPageURL: string;

	errorMessage: string;

	createUserLabel: string;

	createUserPath: string;

	forgotPasswordLabel: string;

	forgotPasswordPath: string;

	constructor(nativeElement: ElementRef) {
		var currentNativeElement = nativeElement.nativeElement;
		console.debug('The Login Component.');
		this.userIconPath = currentNativeElement.getAttribute('data-user-icon-path');
		this.userIdLabel = currentNativeElement.getAttribute('data-user-id-label');
		this.userIdDescription = currentNativeElement.getAttribute('data-user-id-description');
		this.passwordLabel = currentNativeElement.getAttribute('data-password-label');
		this.loginButtonLabel = currentNativeElement.getAttribute('data-login-button-label');
		this.dashboardPageURL = currentNativeElement.getAttribute('data-dashboard-page-url');
		this.errorMessage = currentNativeElement.getAttribute('data-error-message');
		this.createUserLabel = currentNativeElement.getAttribute('data-create-user-label');
		this.createUserPath = currentNativeElement.getAttribute('data-create-user-path');
		this.forgotPasswordLabel = currentNativeElement.getAttribute('data-forgot-password-label');
		this.forgotPasswordPath = currentNativeElement.getAttribute('data-forgot-password-path');
		console.log('The Provided Image is ', this.userIconPath, nativeElement);
	}

  public password: string = '';

  public userName: string = '';

  handleFormSubmission(form: NgForm) {
    console.log('The Form has been submitted ', form);
  }
}