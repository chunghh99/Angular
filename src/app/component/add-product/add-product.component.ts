import { Component, OnInit, Input } from '@angular/core';
import {Product} from './../product/product';
import {ProductService} from './../../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product: Product = new Product;
  constructor(private productService:ProductService, private router:Router) { }
  @Input('dataProduct') newProduct;
  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data=>{
    });
  }
  onSubmit(formAdd){
    if(formAdd.valid){
      this.productService.addProduct(formAdd.value).subscribe(data=>{
       return this.router.navigateByUrl('/manager');
      });
    }
  }

}
