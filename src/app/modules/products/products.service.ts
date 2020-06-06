import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './entities/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public create(payload: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', payload)
  }
}
