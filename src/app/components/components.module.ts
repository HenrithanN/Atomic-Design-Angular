import { ItemCarrinhoComponent } from './Organismos/item-carrinho/item-carrinho.component';
import { IconsComponent } from './Atomos/icons/icons.component';
import { ButtonIconComponent } from './Atomos/buttons/button-icon/button-icon.component';
import { InputComponent } from './Atomos/input/input.component';
import { CardComponent } from './Organismos/card/card.component';
import { InformacoesComponent } from './Moleculas/informacoes/informacoes.component';
import { ImagemComponent } from './Atomos/imagem/imagem.component';
import { SecondaryButtonComponent } from './Atomos/buttons/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from './Atomos/buttons/primary-button/primary-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule

  ],
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ImagemComponent,
    InformacoesComponent,
    CardComponent,
    InputComponent,
    ButtonIconComponent,
    IconsComponent,
    ItemCarrinhoComponent
  ],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ImagemComponent,
    InformacoesComponent,
    CardComponent,
    InputComponent,
    ButtonIconComponent,
    IconsComponent,
    ItemCarrinhoComponent
  ]
})
export class ComponentsModule { }
