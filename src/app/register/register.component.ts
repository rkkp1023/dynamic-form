import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    // private alertService:
  ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.registerService.$registerUser(this.profileForm.value).toPromise().then(
      res => {
        console.log("response after register is", res);
        window.alert("Succesfully rgister");
      }
    )

  }

}
