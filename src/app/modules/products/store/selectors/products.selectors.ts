import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState } from '../state/products.state';
import * as fromReducer from '../reducers/data/products.reducer'

export const productsSelector = createFeatureSelector<ProductState>('productsModule');

export const getProducts = createSelector(
  productsSelector,
  (state: ProductState) => state.products
);

export const selectProducts = createSelector(getProducts, fromReducer.selectAll);
