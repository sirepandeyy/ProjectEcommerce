import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
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

    this.id = this.route.snapshot.params.id;

    this.productService.get(this.id).subscribe(
      product => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
           title: product.title,
           description: product.title,
           image: product.image,
           price: product.price
        });
      }
    );
    }

    
  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.str.DataCollection[0].Id = this.id
    this.productService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/products']));
    };



}
