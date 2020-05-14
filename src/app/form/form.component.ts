import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'Primo Task - Form';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm): void {
    console.log(formData.value)
  }

}
