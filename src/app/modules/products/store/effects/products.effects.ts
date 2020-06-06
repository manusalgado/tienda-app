import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, tap, exhaustMap } from 'rxjs/operators';
import { ProductActions } from '../actions/products.actions';
import { ProductsService } from '../../products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private service: ProductsService,
  ) {}

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProductAction),
      mergeMap((action) => this.service.create(action.payload)
      .pipe(
        map((data) => {
          setTimeout(() => alert('Producto creado exitosamente'))
          return ProductActions.createProductSuccessAction({data})
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductsAction),
      mergeMap(() => this.service.get()
      .pipe(
        map((data) => {
          return ProductActions.getProductsSuccessAction({data})
        }),
        catchError(() => EMPTY)
      ))
    )
  );

}
