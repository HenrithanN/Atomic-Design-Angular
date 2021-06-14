import { ComponentsModule } from './components/components.module';
import { PrecosDeEnvioComponent } from './precos-de-envio/precos-de-envio.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      ProductListComponent,
      HeaderComponent,
      ProductDetailsComponent,
      CarrinhoComponent,
      PrecosDeEnvioComponent,

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'carrinho', component: CarrinhoComponent},
      {path: 'precosDeEnvios', component: PrecosDeEnvioComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
