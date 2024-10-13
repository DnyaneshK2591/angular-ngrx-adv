import { Component } from '@angular/core';
import { AppState } from '../states/cart/app.state';
import { selectCartProducts } from '../states/cart/cart.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartProducts);

  constructor(private store: Store<AppState>) {}
}
