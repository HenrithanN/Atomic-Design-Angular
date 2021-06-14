import { Products } from './../product-list/products';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Products;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartServiice: CartService
  ) { }

  ngOnInit(): void {

      this.pegarDados();
  }

  pegarDados(): any{
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productService.getDetails(productIdFromRoute).subscribe(res => (this.product = res));
  }

  adicionarAoCarrinho(product: Products): any{
    this.cartServiice.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

}
