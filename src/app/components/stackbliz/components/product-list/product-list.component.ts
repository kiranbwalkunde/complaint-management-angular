/**
* The product List Component.
*
* @author Kiran. Created on 29th Dec. 2019.
*/
import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.model';

@Injectable()
export class ProductListComponent {
	
	products: Product[];
	
	constructor() {
		this.products = [
			new Product('First', 1, 'The First Product'),
			new Product('Second', 2, 'The Second Product'),
			new Product('Third', 3, 'The Third Product')
		];
		console.debug('The Product List Component', Product);
	}
	
	getProducts(): Product[] {
		console.debug('The GET Products method has been called. ');
		return this.products;
	}
}