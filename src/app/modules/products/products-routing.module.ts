import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsContainer } from './products.container';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductsContainer,
      },
      {
        path: 'create',
        component: ProductComponent
      }
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
