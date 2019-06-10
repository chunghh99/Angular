import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../service/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService:ProductService, private route: ActivatedRoute) { }
  product: Product= new Product;
  products: Product[];
  ngOnInit() {
    this.getProduct();
    this.getListProduct();
  }
  getProduct(){
    this.route.params.subscribe(params=>{
      const{id}=params;
      this.productService.getProduct(id).subscribe(data=>{
       return this.product=data
      })
    })
  }
  getListProduct(){
    this.productService.getProducts().subscribe(data => this.products=data);
  }
  
  
}
