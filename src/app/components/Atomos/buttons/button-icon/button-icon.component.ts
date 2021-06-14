import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html'
})
export class ButtonIconComponent implements OnInit {

  @Input() conteudo: string = ''
  @Input() icone: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
