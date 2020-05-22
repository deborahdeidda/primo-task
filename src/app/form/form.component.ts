import { Component, OnInit } from '@angular/core';

import { Form } from './form';

import { Button } from '../button/button';

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
     // console.log("Form:", this.form);
     // console.log("Button:", this.configButton);
     // this.form = formData;
     this.submitted = true;
  }
}
