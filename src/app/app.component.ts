import { Component } from '@angular/core';
import { ProductListComponent } from './components/stackbliz/components/product-list/product-list.component';
import { Product } from './components/stackbliz/models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'complaint-management-system';
	
	constructor(private products: ProductListComponent) {}
	
	getProducts(): Product[] {
		console.log('The Get Products method has been called. ');
		return this.products.getProducts();
	}
}
