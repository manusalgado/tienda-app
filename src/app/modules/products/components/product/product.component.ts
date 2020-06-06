import { Component, OnInit } from '@angular/core';
import { SIZES } from '../../constants/products';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Product } from '../../entities/products';
import { ProductFacade } from '../../products.facade';
import { v1 as uuidv1 } from 'uuid';
import {Location} from '@angular/common'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public sizes: string[] = SIZES;
  public form: FormGroup;
  public submitted: boolean = false;

  constructor(private facade: ProductFacade, private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  get fieldsControl(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    })
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const {name, size, brand, description, stock, date} = this.form.value;
      const payload: Product = {name, size, description, brand, stock, date, id: uuidv1()};
      this.createProduct(payload);
      this.form.reset();
      this.location.back()

    }
  }

  public createProduct(payload: Product): void {
    this.facade.createProduct(payload)
  }

}
