import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  @Input() typeInput;
  @Input() name;
  @Input() label;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
