import { Component, OnInit, Input } from '@angular/core';
import { ProductFacade } from '../../products.facade';
import { Product } from '../../entities/products';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.sass']
})
export class ProductsTableComponent implements OnInit {

  @Input() products: Product[];

  constructor(private facade: ProductFacade) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  public fetchProducts(): void {
    this.facade.fetchProducts()
  }

}
