import { Component, OnInit } from '@angular/core';
import { SIZES } from '../../constants/products';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public sizes: string[] = SIZES;
  public form: FormGroup;
  public submitted: boolean = false;

  constructor() { }

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

    }
    console.log(this.form.value);
    
  }

}
