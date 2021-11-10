import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs'; 
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  
  public product: ProductModel;

  private paramMapSub: Subscription = null;
  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {

      this.paramMapSub = this.route.paramMap.subscribe(params => {
        const pId: number = Number(params.get('productId'));
        this.productService.getProducts().forEach(p => {
          if (p.productId === pId) {
            this.product = p;
          }
        })
            

      })

   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.paramMapSub != null){
        this.paramMapSub.unsubscribe();
        this.paramMapSub = null;
    }
  }
  public addToCart(){
    this.cartService.addToCart(this.product);

  }
}
