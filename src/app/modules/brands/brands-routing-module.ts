import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandsContainer } from './brands.container';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BrandsContainer,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
