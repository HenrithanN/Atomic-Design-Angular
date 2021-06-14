import { Products } from './../../../product-list/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-carrinho',
  templateUrl: './item-carrinho.component.html',
  styleUrls: ['./item-carrinho.component.css']
})
export class ItemCarrinhoComponent implements OnInit {

  @Input() items: Products;
  @Input() precoDeEnvio;
  constructor() { }

  ngOnInit() {
  }

}
