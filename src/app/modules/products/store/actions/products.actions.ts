import { createAction, props } from '@ngrx/store';
import { Product } from '../../entities/products';

export const createProductAction = createAction('[Product]Create Product', props<{payload: Product}>());
export const createProductSuccessAction = createAction('[Product]Create Product Success', props<{data: Product}>());
export const getProductsAction = createAction('[Product]Get Products');
export const getProductsSuccessAction = createAction('[Product]Get Products Success', props<{data: Product[]}>());

export const ProductActions = {
  createProductAction,
  createProductSuccessAction,
  getProductsSuccessAction,
  getProductsAction
}