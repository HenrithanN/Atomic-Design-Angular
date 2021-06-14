import { HttpClient } from '@angular/common/http';
import { Products } from './../product-list/products';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Products[] = [];
  precoEnvio = [];

  constructor(
    private http: HttpClient
  ) { }

  getPrecoEnvio(): any{
    return this.http.get<{type: string, price: number}[]>(`${API}/precoEnvio`);
  }
  addToCart(product: Products): any{
    this.items.push(product);
  }

  getItems(): any{
    return this.items;
  }

  clearCart(): any{
    this.items = [];
    return this.items;
  }

  addPrecoEnvio(precoDeEnvio: any): any{
    this.precoEnvio.push(precoDeEnvio);
  }
  precoEnvioSelected(): any{
    return this.precoEnvio;
  }
  removePrecoEnvio(): any{
    this.precoEnvio = [];
    return this.precoEnvio;
  }

}
