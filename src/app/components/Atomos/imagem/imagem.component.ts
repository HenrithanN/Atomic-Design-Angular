import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html'
})
export class ImagemComponent implements OnInit {

  @Input() url = '';
  @Input() descricao = '';
  @Input() classe = '';
  constructor() { }

  ngOnInit(): void {
  }

}
