import { combineReducers } from '@ngrx/store';
import { productsReducer as products } from './data/products.reducer';

export const ProductRootReducer = combineReducers({
  products
})