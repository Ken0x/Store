import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[];

  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }

  ngOnInit(){

  }
}
