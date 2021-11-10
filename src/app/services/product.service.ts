
import { Injectable } from '@angular/core';
import { ProductModel } from './../models/product.model';
import { AddproductComponent } from './../addproduct/addproduct.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[];
  
  

  constructor() {
    this.products = [
       new ProductModel(0, 'Phone XL', 799, 'A large phone with one of the best screeens'),
       new ProductModel(1, 'Phone Standard', 599, 'A great phone with one of the best cameras'),
       new ProductModel(2, 'Phone mini', 299, 'Great mini phone'),
      ];
   }
   public addProduct(product: ProductModel): void{
    //this.products.push(new ProductModel(product.productId, product.name, product.price, product.description));
    this.products.push(product);
  }
   public getProducts(): ProductModel [] {
     return this.products;
   }
  
   
}
