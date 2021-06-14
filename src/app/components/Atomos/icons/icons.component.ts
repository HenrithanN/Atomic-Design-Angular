import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html'
})
export class IconsComponent implements OnInit {

  constructor() { }

  @Input() icon: string = '';
  ngOnInit(): void {
  }

}
