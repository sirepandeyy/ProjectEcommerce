import { Link } from './../../interfaces/link';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { LinkService } from 'src/app/services/link.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.css']
})
export class BackendProductsComponent implements OnInit {

  products: Product[] = [];

data:Product[]=[]
  showButton = true;
  selected=1 

  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor(
    private productService: ProductService,
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
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

    getData(id:number){
      this.linkService.get(id).subscribe(
        (res: any) => {
          this.data[0] = res.DataCollection
          console.log(this.data[0])
        }
      )

     
    }

    add(id:number){
      this.getData(id)
      setTimeout(()=>{
        console.log(this.data[0])
        this.str.DataCollection = this.data[0]
       console.log(this.str)
       this.linkService.createPost(this.str).subscribe(
        );
      },500)  
     
    }


}
