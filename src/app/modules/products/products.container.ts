import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './entities/products';
import { ProductFacade } from './products.facade';

@Component({
  selector: 'app-root',
  templateUrl: './products.container.html',
})
export class ProductsContainer {

  constructor(private facade: ProductFacade) {}

  get products$(): Observable<Product[]> {
    return this.facade.products$
  }
}
