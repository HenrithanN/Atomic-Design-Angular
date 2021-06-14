import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  items;
  checkoutForm;
  precoDeEnvio;
  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private route: Router
    ) { }

    ngOnInit(): void {
      this.items = this.cartService.getItems();
      this.precoDeEnvio = this.cartService.precoEnvioSelected();
      this.checkoutForm = this.fb.group({
        nome: '',
        enderecos: ''
      });
    }

    onSubmit(): void{
     const dados = this.checkoutForm.getRawValue()
    if(this.checkoutForm.valid){

      alert(`
      Nome: ${dados.nome}
      Endereço: ${dados.enderecos}`);
      console.warn(dados);
      window.alert('Pedido Encaminhado');
      this.items = this.cartService.clearCart();
      this.route.navigate(['']);
    }
    else{
      this.checkoutForm.markAllAsTouched();
    }
  }

  alertaoi(){
    alert('oi')
  }

}
