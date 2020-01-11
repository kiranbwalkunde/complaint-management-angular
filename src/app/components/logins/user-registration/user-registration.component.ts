import { Component, ElementRef } from '@angular/core';
import { UserRegistrationModel } from '../../../models/user.registration.model';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-user-registration',
	templateUrl: 'user-registration.component.html'
})
export class UserRegistrationComponent {

	userModel: UserRegistrationModel = new UserRegistrationModel();

	heading: string;
	
	firstName: string;

	middleName: string;
	
	lastName: string;
	
	preferredUserId: string;
	
	emailId: string;
	
	password: string;
	
	retypePassword: string;

	address: string;
	
	taluka: string;
	
	district: string;
	
	pinCode: string;

	createUser: string;
	
	resetButton: string;
	
	confirmationPageUrl: string;
	
	constructor(private nativeElement: ElementRef) {
		var currentNativeElement = nativeElement.nativeElement;
		console.debug('The User Registration Component.');
		this.heading = currentNativeElement.getAttribute('data-heading');
		this.firstName = currentNativeElement.getAttribute('data-first-name');
		this.middleName = currentNativeElement.getAttribute('data-middle-name');
		this.lastName = currentNativeElement.getAttribute('data-last-name');
		this.preferredUserId = currentNativeElement.getAttribute('data-preferred-user-id');
		this.emailId = currentNativeElement.getAttribute('data-email-id');
		this.password = currentNativeElement.getAttribute('data-password');
		this.retypePassword = currentNativeElement.getAttribute('data-retype-password');
		this.address = currentNativeElement.getAttribute('data-address');
		this.taluka = currentNativeElement.getAttribute('data-taluka');
		this.district = currentNativeElement.getAttribute('data-district');
		this.pinCode = currentNativeElement.getAttribute('data-pin-code');
		this.createUser = currentNativeElement.getAttribute('data-create-user');
		this.resetButton = currentNativeElement.getAttribute('data-reset-button');
		this.confirmationPageUrl = currentNativeElement.getAttribute('data-confirmation-page-url');
	}
	
	onSubmitForm(form: NgForm) {
		console.log('The Form has been submitted ', form, this.userModel);
	}
}