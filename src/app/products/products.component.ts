import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/Product.model';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: any[];
  constructor(
    private productsService: ProductsService,
    private store: Store<{ cart: { products: Product[] } }>
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productsService.fetchProducts().subscribe(data => {
      this.products$ = data;
    });
  }

  addItemToCart(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }
}
