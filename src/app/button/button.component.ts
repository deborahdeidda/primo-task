import { Component, OnInit, Input } from '@angular/core';

import { Button } from './button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  title = 'Primo Task: Button';

  //  @Input() configButton: Button = {
  //   class: 'btn-class',
  //   name: 'btn-name',
  //   type: 'button',
  //   icon: 'fab fa-angular fa-4x',
  //   href: ''
  // };

  //button configuration through input form
  @Input() configButton: Button = {
    class: 'value',
    name: 'value',
    type: 'value',
    icon: 'value',
    href: 'value'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
