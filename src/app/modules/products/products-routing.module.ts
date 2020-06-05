import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsContainer } from './products.container';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductsContainer,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
