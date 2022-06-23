import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductService} from "./services/product.service";
import {ListProductComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";


@NgModule({
  declarations: [
    ListProductComponent,
    EditComponent
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {
}
