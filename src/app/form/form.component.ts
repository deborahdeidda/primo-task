import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  //input fields
  @Input() form: Form = {
    class: '',
    name: '',
    type: '',
    icon: '',
    href: ''
  }

  //listening for an triggered event
  @Output() newEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm): void {
    console.log("Form data:", formData.value)
    this.newEvent.emit(formData)
  }
}
