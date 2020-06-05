import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrandState } from './store/state/brand.state';
import { BrandRootReducer } from './store/reducers';
import { BrandsContainer } from './brands.container';
import { BrandsRoutingModule } from './brands-routing-module';
import { BrandsTableComponent } from './components/brands-table/brands-table.component';

export const BRAND_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<BrandState>
>('Feature BrandModule Reducers');

@NgModule({
  declarations: [BrandsContainer, BrandsTableComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('brandsModule', BRAND_REDUCER_TOKEN),
    EffectsModule.forFeature([]),
    BrandsRoutingModule
  ],
  providers: [
    { provide: BRAND_REDUCER_TOKEN, useValue: BrandRootReducer },
  ]
})
export class BrandsModule { }
