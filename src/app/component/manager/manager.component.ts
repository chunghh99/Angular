import { Component, OnInit } from '@angular/core';
import {Product} from './../product/product';
import {ProductService} from '../../service/product.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  products: Product[];
  product: Product= new Product;
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
  onSubmit(formAdd){
    if(formAdd.valid){
      this.productService.addProduct(formAdd.value).subscribe(data=>{
        this.products.push(data)
      });
    }
  }
}
