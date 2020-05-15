import { Component, OnInit, Input, Output } from '@angular/core';

import { Form } from './form';

import { NgForm } from '@angular/forms';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'Primo Task - Form';

  @Input() form: Form = {
    class: 'class',
    name: 'name',
    type: 'type',
    href: '../button/button.component.html'
  }

  @Output() button: ButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm): void {
    console.log(formData.value)
    // this.formData.href = button;
  }

}
