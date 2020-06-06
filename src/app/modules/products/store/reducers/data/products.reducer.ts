import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Product } from '../../../entities/products';
import { ProductActions } from '../../actions/products.actions';

export interface ProductsState extends EntityState<Product> {
  selected: number | null;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id
});

export const initialState: ProductsState = productAdapter.getInitialState({
  selected: null
});

const reducer = createReducer(
  initialState,
  on(ProductActions.getProductsSuccessAction, (state, { data }) => {
    return productAdapter.addAll(data, state);
  })
);

export function productsReducer(state: ProductsState, action: Action): ProductsState {
  return reducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = productAdapter.getSelectors();
