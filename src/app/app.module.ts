import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './states/cart/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ProductsComponent,
    ProductCardComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
