import { Component, OnInit, Input } from '@angular/core';

import { Button } from './button';

import { FormComponent } from '../form/form.component';

import { Form } from '../form/form';

import { NgForm } from '@angular/forms';

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

  @Input() configButton: Form;

  constructor() { }

  ngOnInit(): void {
  }

}
