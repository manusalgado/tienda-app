import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductState } from './store/state/products.state';
import { ProductRootReducer } from './store/reducers';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsContainer } from './products.container';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';

export const PRODUCT_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<ProductState>
>('Feature ProductModule Reducers');

@NgModule({
  declarations: [ProductsContainer, ProductsTableComponent, ProductComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('productsModule', PRODUCT_REDUCER_TOKEN),
    EffectsModule.forFeature([]),
    ProductsRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: PRODUCT_REDUCER_TOKEN, useValue: ProductRootReducer },
  ]
})
export class ProductsModule { }
