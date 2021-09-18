import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
      title: '',
      description: '',
      image: '',
      price: ''
    });
  }

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    console.log(this.str)
    this.productService.create(this.str).subscribe(
      () => this.router.navigate(['/products'])
    );
  }
}
