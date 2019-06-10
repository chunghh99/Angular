import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = new Product();
  constructor(private productService: ProductService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.productService.getProduct(id).subscribe(data => {
        return this.product = data
      })
    })
  }
  onSubmit(formedit) {
    if (formedit.valid) {
      return this.productService.editProduct(formedit.value).subscribe(data => {
        return this.router.navigateByUrl('/manager')
      })

    }
  }

}
