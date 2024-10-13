import { Component,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { AppState } from 'src/app/states/cart/app.state';
import { selectCartProducts } from './../../states/cart/cart.selector'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  product$: Observable<Product[]>;
  constructor(private store: Store<AppState>) {
    this.product$ = this.store.select(selectCartProducts);
  }
}
