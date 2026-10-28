import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductForCarouselService {
  private products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 699,
      category: 'Electronics',
      image: 'assets/smartphone.jpg',
    },
    {
      id: 2,
      name: 'Laptop',
      price: 999,
      category: 'Electronics',
      image: 'assets/laptop.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199,
      category: 'Electronics',
      image: 'assets/headphones.jpg',
    },
    {
      id: 4,
      name: 'Shoes',
      price: 129,
      category: 'Fashion',
      image: 'assets/shoes.jpg',
    },
    {
      id: 5,
      name: 'T-Shirt',
      price: 49,
      category: 'Fashion',
      image: 'assets/tshirt.jpg',
    },
  ];

  constructor() {}

  getProductsByCategory(category: string): Observable<any[]> {
    console.log(category , "in service")
    const filteredProducts = this.products.filter(
      (product) => product.category === category
    );
    return of(filteredProducts);
  }
}
