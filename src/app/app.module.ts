import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, APP_INITIALIZER, ApplicationRef, Type, ComponentFactoryResolver } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/logins/login/login.component';
import { UserRegistrationComponent } from './components/logins/user-registration/user-registration.component';
import { ProductListComponent } from './components/stackbliz/components/product-list/product-list.component';
import { LoginConfirmationComponent } from './components/logins/confirmation/confirmation.component';

const components = [AppComponent, LoginComponent, UserRegistrationComponent, LoginConfirmationComponent];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
		UserRegistrationComponent,
		LoginConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
		ProductListComponent
	],
	entryComponents: components
})
export class AppModule {
	
	constructor(private resolver: ComponentFactoryResolver) {
		console.debug('The bootstrap has been called.');
	}
	
	ngDoBootstrap(appRef: ApplicationRef) {
		console.debug('The Bootstrap has been called');
		components.forEach((componentRef: Type<{}>) => {
			const factory = this.resolver.resolveComponentFactory(componentRef);
			if (document.querySelector(factory.selector)) {
				appRef.bootstrap(factory);
			}
		});
	}
}
