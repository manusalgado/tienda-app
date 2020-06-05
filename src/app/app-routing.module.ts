import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./modules/brands/brands.module').then((m) => m.BrandsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
