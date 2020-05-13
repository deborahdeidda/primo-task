import { Component, OnInit, Input } from '@angular/core';
import { Button } from './button-mock';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

   @Input() configButton: Button = {
    class: 'btn-class',
    name: 'btn-name',
    type: 'button'
  };

  imageBtn = {
    src: './assets/envelope.png',
    class: 'img-class'
  }










  constructor() { }

  ngOnInit(): void {
  }

}
