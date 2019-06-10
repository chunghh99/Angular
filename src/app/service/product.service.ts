import { Injectable } from '@angular/core';
import {DataProduct} from '../component/product/MockProduct';
import { Product } from './../component/product/product';
import { of, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private data=[...DataProduct];
private urlApi="http://5ca73f698e58df0014602f31.mockapi.io/products_Assignment";
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi);
  }
  addProduct(product):Observable<Product>{
    return this.http.post<Product>(this.urlApi,product);
  }
  getProduct(id):Observable<Product>{
    return this.http.get<Product>(`${this.urlApi}/${id}`)
  }
  deleteProduct(product):Observable<Product>{
    return this.http.delete<Product>(`${this.urlApi}/${product.id}`)
  }
  editProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.urlApi}/${product.id}`,product)
  }
}
