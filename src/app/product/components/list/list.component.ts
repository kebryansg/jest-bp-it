import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
