import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {generateProducts} from "../../services/mockFunctions/product.mock";
import {Product, ProductService} from "./product.service";

describe("Product Service", () => {

  let service: ProductService
  let httpTestingController: HttpTestingController
  let apiURL: string = environment.apiURL

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    })
    service = TestBed.inject(ProductService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('created', () => {
    expect(service).toBeTruthy()
  });

  it("Fn #getProducts", (done) => {
    // AAA
    // const mockData: any[] = []
    const mockDataDto: any = []
    const mockDataResponse: any = {
      length: 0,
      data: []
    }

    service.getProducts()
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      })

    const url = `${apiURL}/product`
    const req = httpTestingController.expectOne(url)
    const request = req.request

    expect(
      request.method
    ).toEqual('GET')

    req.flush(mockDataDto)

  })

  it("Fn #getProductsgetProductsSummary", (done) => {
    // AAA
    // const mockData: any[] = []
    const mockDataDto: Product[] = generateProducts(25)
    const mockDataResponse: any = {
      length: mockDataDto.length,
      totalPrice: mockDataDto.reduce((acc, product) => acc + product.price, 0),
      data: [...mockDataDto]
    }

    service.getProductsSummary()
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      })

    const url = `${apiURL}/product`
    const req = httpTestingController.expectOne(url)
    const request = req.request

    expect(
      request.method
    ).toEqual('GET')

    req.flush(mockDataDto)

  })

  it("Fn #getOneProduct", (done) => {
    // AAA
    const mockData: any = {}
    const mockParamCodProd = "xyz123"

    service.getOneProduct(mockParamCodProd)
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockData)

        done();
      })

    const url = `${apiURL}/product?cod=${mockParamCodProd}`
    const req = httpTestingController.expectOne(url)
    const request = req.request

    expect(
      request.method
    ).toEqual('GET')

    req.flush(mockData)

    // httpTestingController.verify()

  })

  it('Fn #createProduct', (done) => {
    const mockDataResponse = {}
    const dto = {
      name: "Caramelo",
      price: 5,
      image: "",
    }

    service.createProduct({...dto})
      .subscribe((response: any) => {
        expect(response)
          .toEqual(mockDataResponse)
        done()
      })

    const url = `${apiURL}/product`
    const req = httpTestingController.expectOne(url)
    const request = req.request


    expect(request.method)
      .toBe('POST')

    expect(request.body)
      .toEqual(dto)

    req.flush(mockDataResponse)

  });

  it('Fn #deleteProduct', (done) => {
    const mockCodProduct = "xyz123"

    service.deleteProduct(mockCodProduct)
      .subscribe((response: boolean) => {
        expect(response)
          .toEqual(true)
        done()
      })

    const url = `${apiURL}/product/${mockCodProduct}`
    const req = httpTestingController.expectOne(url)
    const request = req.request

    expect(request.method)
      .toBe('DELETE')

    req.flush(true)

  });

})
