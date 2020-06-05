import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductState } from './store/state/products.state';
import { ProductRootReducer } from './store/reducers';

export const PRODUCT_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<ProductState>
>('Feature ProductModule Reducers');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('productsModule', PRODUCT_REDUCER_TOKEN),
    EffectsModule.forFeature([])
  ],
  providers: [
    { provide: PRODUCT_REDUCER_TOKEN, useValue: ProductRootReducer },
  ]
})
export class ProductsModule { }
