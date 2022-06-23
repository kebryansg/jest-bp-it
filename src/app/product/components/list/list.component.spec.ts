import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductComponent } from './list.component';
import {ProductService} from "../../services/product.service";

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;


  let mockProductService = {
    getProducts: jest.fn(),
    getProductsSummary: jest.fn(),
    getOneProduct: jest.fn(),
    createProduct: jest.fn(),
    editProduct: jest.fn(),
    deleteProduct: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductComponent ],
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService,
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
