import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { ManagerComponent } from './component/manager/manager.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AddProductComponent,
    HomeComponent,
    NotFoundComponent,
    ManagerComponent,
    ProductDetailComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
