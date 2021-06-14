import { Products } from './../../../product-list/products';
import { ProductService } from './../../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() products: Products;
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void{
    this.listarProdutos();
  }

  listarProdutos(): any{
    return this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  onShare(): any{
    window.alert('O Produto foi compartilhado!');
  }
  onNotify(): any{
    window.alert('Você será notificado quando este produto estiver disponível para compra!');
  }
}
