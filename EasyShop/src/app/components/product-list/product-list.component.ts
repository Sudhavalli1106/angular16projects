import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("before callback")
    this.productService.getProducts().subscribe(
      //async call
      (data:any) => {
        console.log("inside callback")
      this.products = data;  // Assign API response to products array
    });
    console.log("after callback")
  }
}
//any function that is passed as an argument to another function
//not be executed immediately
//subscribe(your own function - write business logic to assign the data)