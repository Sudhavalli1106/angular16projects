import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-electronic-items',
  templateUrl: './electronic-items.component.html',
  styleUrls: ['./electronic-items.component.css'],
})
export class ElectronicItemsComponent implements OnInit {
  electronicItems: any[] = [];

  constructor(private objProductService:ProductService) {}

  ngOnInit(): void {
    // this.http.get<any[]>('assets/electronic-items.json').subscribe((data) => {
    //   this.electronicItems = data;
    // });
    this.electronicItems = this.objProductService.getProductData();
  }
}
