import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from './../services/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public productId:any;
  public name: any;
  public price: number;
  public description: any;
  products: Array<ProductModel> = [];
  public productService: ProductService;
  
  
  constructor(productService: ProductService) { 
      this.productService = productService;
      }
  ngOnInit(): void {
    
  }
    public addProduct(): void{
      let product = new ProductModel(this.productId, this.name, this.price, this.description);
      this.productService.addProduct(product);
    }
    public getProducts(): ProductModel [] {
      return this.products;
    }
}