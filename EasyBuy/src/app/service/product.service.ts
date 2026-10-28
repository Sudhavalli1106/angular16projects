import { Injectable } from '@angular/core';
import data from '../../assets/electronic-items.json';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  pdata: any;
  constructor() {
    this.pdata = data;
  }
  getProductData() {
    return this.pdata;
  }

}
