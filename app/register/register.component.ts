import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myform: FormGroup;

  email: string;
  personal: string;
  password: string;
  mobile: string;
  age: string;
  message: string;
  isSuccessfullyRegistered: boolean= true;

  constructor(private localStorage: LocalStorageService) {
      
  }
  onRegisterClick() {
    if(this.mobile == undefined)
    {
      this.isSuccessfullyRegistered = false;
    }
    else{
      this.localStorage.set("user", { email: this.email, personal: this.personal, password: this.password });
      this. isSuccessfullyRegistered = true;
    }
  }
}
