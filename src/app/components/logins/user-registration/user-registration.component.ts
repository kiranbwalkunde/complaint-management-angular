import { Component } from '@angular/core';
import { UserRegistrationModel } from '../../../models/user.registration.model';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-user-registration',
	templateUrl: 'user-registration.component.html'
})
export class UserRegistrationComponent {

	userModel: UserRegistrationModel = new UserRegistrationModel();

	onSubmitForm(form: NgForm) {
		console.log('The Form has been submitted ', form, this.userModel);
	}
}