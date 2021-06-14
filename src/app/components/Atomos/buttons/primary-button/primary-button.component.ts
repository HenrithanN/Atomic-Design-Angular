import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html'
})
export class PrimaryButtonComponent implements OnInit {

  @Input() conteudo: string = '';
  @Input() tamanho: boolean = false;
  constructor() { }

  ngOnInit(): void{
  }

}
