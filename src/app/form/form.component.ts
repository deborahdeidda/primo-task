import { Component, OnInit, Output } from '@angular/core';

import { Button } from '../button/button';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'Primo Task - Form';

  inputForm: Button = {
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
  onSubmit(data) {
    this.inputForm.class = data.class,
    this.inputForm.name = data.name,
    this.inputForm.type = data.type,
    this.inputForm.icon = data.icon,
    this.inputForm.href = data.href
    this.submitted = true;
  }

}
