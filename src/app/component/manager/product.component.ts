import { Component, OnInit } from '@angular/core';
import {DataProduct} from './MockProduct';
import {Product} from './product';
import {ProductService} from '../../service/product.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getlistProduct();
  }
  getlistProduct(){
    this.productService.getProducts().subscribe(data => this.products=data);
  }
  deleteProduct(product) {
    this.productService.deleteProduct(product).subscribe(data=>{
      return this.products=this.products.filter(item=>item.id!==data.id)
    })
  }
  

}
