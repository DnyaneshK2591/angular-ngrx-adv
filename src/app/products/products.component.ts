import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$ :any[];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();


  }
  getProducts() {
    this.productsService.fetchProducts().subscribe(data => {
      this.products$ = data;
    });
  }
}
