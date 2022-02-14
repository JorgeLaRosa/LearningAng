import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formLogin = this.formBuilder.group({
    name: '',
    email: ''
  });
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: ['', [Validators.required]]
    })

  }

  send() {
    alert("received")
  }

}
