import { Component, OnInit, Input, Output } from '@angular/core';

import { Form } from './form';

import { NgForm } from '@angular/forms';

import { ButtonComponent } from '../button/button.component';

import { Button } from '../button/button';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'Primo Task - Form';

  @Input() form: Form = {
    class: '',
    name: '',
    type: '',
    icon: '',
    href: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  // onButtonClick: Form;
  onSubmit(formData: NgForm): void {
    console.log(formData.value)
    this.form.class = formData.value.class
    this.form.name = formData.value.name
    this.form.type = formData.value.type
    this.form.icon = formData.value.icon
    this.form.href = formData.value.href
    // this.onButtonClick = formData;
  }

}
