import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './states/cart/app.state';
import { Observable } from 'rxjs';
import { Product } from './models/Product.model';
import { selectCartProducts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ngrx-adv';
  product$: Observable<Product[]>;
  constructor(private store: Store<AppState>) {
    this.product$ = this.store.select(selectCartProducts);
  }
}
