import { Component, OnInit } from '@angular/core';

import { Form } from './form';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'Primo Task - Form';

  form: Form = {
    class: '',
    name: '',
    type: '',
    icon: '',
    href: ''
  };

  constructor() {}

  ngOnInit(): void {
  }

  submitted = false;
  onSubmit(formData: NgForm): void {
     console.log("Form data:", formData);
     this.submitted = true;
  }
}
