import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from './../models/product.model';
@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(products:ProductModel[]): number {
    return products
        .map(p => p.price)
        .reduceRight((acc, next) => acc + next);
  }

}
