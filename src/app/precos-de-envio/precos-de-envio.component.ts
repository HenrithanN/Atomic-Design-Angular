import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precos-de-envio',
  templateUrl: './precos-de-envio.component.html'
})
export class PrecosDeEnvioComponent implements OnInit {
  precosDeEnvio;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.precosDeEnvio = this.cartService.getPrecoEnvio();

  }
  adicionarAoCarrinho(precoDeEnvio: any): any{
    this.cartService.removePrecoEnvio();
    this.cartService.addPrecoEnvio(precoDeEnvio);
    window.alert('Preço de envio selecionado com sucesso!');
  }

}
