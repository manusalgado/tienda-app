import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductState } from './store/state/products.state';
import { Product } from './entities/products';
import { ProductActions } from './store/actions/products.actions';
import { selectProducts } from './store/selectors/products.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  constructor(private store: Store<ProductState>) {}

  public products$: Observable<Product[]> = this.store.pipe(
    select(selectProducts),
  );

  public createProduct(payload: Product): void {
    this.store.dispatch(ProductActions.createProductAction({payload}))
  }

  public fetchProducts(): void {
    this.store.dispatch(ProductActions.getProductsAction())
  }
}
