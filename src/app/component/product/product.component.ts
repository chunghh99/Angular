import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getlistProduct();
  }
  getlistProduct(){
    this.productService.getProducts().subscribe(data => this.products=data);
  } 

}
