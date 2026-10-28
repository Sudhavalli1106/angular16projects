import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-electronic-item-detail',
  templateUrl: './electronic-item-detail.component.html',
  styleUrls: ['./electronic-item-detail.component.css'],
})
export class ElectronicItemDetailComponent implements OnInit {
  item: any;
  electronicData:any
  constructor(private route: ActivatedRoute,private objProductService:ProductService) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id'); // ✅ Get Route Param
    // this.http.get<any[]>('assets/electronic-items.json').subscribe((data) => {
    //   this.item = data.find((p) => p.id == itemId); // ✅ Find matching item
    // });
    this.electronicData = this.objProductService.getProductData();
    this.item=this.electronicData.find((p:any)=>p.id==itemId)
  }
}