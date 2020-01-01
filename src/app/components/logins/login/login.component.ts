import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  @Input('image-url')
  imageUrl: string;

  public password: string = '';

  public userName: string = '';

  handleFormSubmission(form: NgForm) {
    console.log('The Form has been submitted ', form);
  }
}