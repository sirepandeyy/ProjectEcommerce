import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../../interfaces/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  

  constructor(private productService: ProductService,private router:Router) {
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.productService.all().subscribe(
      (res: any) => {
        this.products = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.productService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.productService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/users'])
        );
      },500)
     
    }
  }
}
