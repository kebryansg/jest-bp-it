import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../environments/environment";

export interface Product {
  cod: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any[]>(this.apiURL + `/product`)
      .pipe(
        map(response => ({
          length: response.length,
          data: [...response]
        }))
      );
  }

  getProductsSummary(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + `/product`)
      .pipe(
        map(response => ({
          length: response.length,
          totalPrice: response
            .reduce((acc, product)  => acc + product.price , 0),
          data: [...response]
        }))
      );
  }

  getOneProduct(codProd: string): Observable<any> {
    return this.http.get<any>(this.apiURL + `/product`, {
      params: {cod: codProd}
    });
    // '/product?cod=value'
  }

  createProduct(product: any): Observable<any> {
    // product.name = product.name.toUpperCase()
    // delete product.image
    return this.http.post<any>(this.apiURL + `/product`, product)
  }

  editProduct(codProd: string, product: any): Observable<any> {
    return this.http.put<any>(this.apiURL + `/product/${codProd}`, product);
  }

  deleteProduct(codProd: string): Observable<boolean> {
    return this.http.delete<boolean>(this.apiURL + `/product/${codProd}`);
  }

}
