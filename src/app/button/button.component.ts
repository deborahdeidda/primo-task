import { Component, OnInit, Input } from '@angular/core';
import { Button } from './button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

   @Input() configButton: Button = {
    class: 'btn-class',
    name: 'btn-name',
    type: 'button',
    icon: 'fab fa-angular fa-4x'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
