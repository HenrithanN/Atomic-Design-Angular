import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html'
})
export class SecondaryButtonComponent implements OnInit {

  @Input() conteudo: string = '';
  @Input() tamanho: boolean = false;
  constructor() { }

  ngOnInit(): void{
  }

}
