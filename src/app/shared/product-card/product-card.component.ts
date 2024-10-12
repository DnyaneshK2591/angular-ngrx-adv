import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() handleAdd = new EventEmitter();

  addToCart(product: Product) {
    this.handleAdd.emit(product);
  }
}
