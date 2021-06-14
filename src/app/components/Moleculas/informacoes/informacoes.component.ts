import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html'
})
export class InformacoesComponent implements OnInit {

  @Input() titulo = '';
  @Input() descricao = '';
  @Input() detalhes = false;
  @Input() list = false;

  constructor() { }

  ngOnInit(): void {
  }

}
