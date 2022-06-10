import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = '...';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiURL + `/product`);
  }

  getOneProduct(codProd: string): Observable<any> {
    return this.http.get(this.apiURL + `/product`, {
      params: {cod: codProd}
    });
  }

  createProduct(product: any): Observable<boolean> {
    return this.http.post<boolean>(this.apiURL + `/product`, product);
  }

  editProduct(codProd: string, product: any): Observable<boolean> {
    return this.http.put<boolean>(this.apiURL + `/product/${codProd}`, product);
  }

  deleteProduct(codProd: string): Observable<boolean> {
    return this.http.delete<boolean>(this.apiURL + `/product/${codProd}`);
  }

}
