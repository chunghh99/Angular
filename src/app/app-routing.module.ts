import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ManagerComponent } from './component/manager/manager.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

const routes : Routes=[
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'product/:id', component:ProductDetailComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'edit-product/:id', component:EditProductComponent},
  {path:'manager', component:ManagerComponent},
  {path: '**', component:NotFoundComponent}
];
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
