import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import {ProductService} from "../../services/product.service";

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

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
      declarations: [ EditComponent ],
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
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
