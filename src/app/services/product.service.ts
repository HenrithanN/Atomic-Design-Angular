import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../product-list/products';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(
  private http: HttpClient
) { }

  getProducts(): Observable<Products>{
    return this.http.get<Products>(`${API}/products`);
  }

  getDetails(id: number): any{
    return this.http.get(`${API}/products/${id}`);
  }
}
