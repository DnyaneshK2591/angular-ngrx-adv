import { Product } from 'src/app/models/Product.model';
import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.action';

export interface CartState {
  products: Product[];
  totalPrice?: number;
}

export const initialCounterState: CartState = {
  products: [],
};

export const cartReducer = createReducer(
  initialCounterState,
  on(CartActions.addToCart, (state, { product }) => {
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts,
    };
  }),

  on(CartActions.incrementProduct, (state, { productId }) => {
    const updateProduct = state.products.map(product =>
      product.id === productId ? product.quantity++ : product
    );
    return {
      ...state,
    };
  }),

  on(CartActions.decrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
    };
  }),

  on(CartActions.removeItem, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      product => product.id !== productId
    );
    return {
      ...state,
      products: updatedProducts,
    };
  })
);
