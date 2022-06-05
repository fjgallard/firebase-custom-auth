import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-phone-login-form',
  templateUrl: './phone-login-form.component.html',
  styleUrls: ['./phone-login-form.component.scss']
})
export class PhoneLoginFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    tel: new FormControl(),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tel: ['', Validators.required]
    });
  }

}
