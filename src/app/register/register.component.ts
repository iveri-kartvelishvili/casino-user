import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginForm = new FormGroup ({
      Username: new FormControl ("",[Validators.required]),
      Age: new FormControl ("",[Validators.required,Validators.min(25)]),
      Deposit:new FormControl ("",[Validators.required])
})
loginUser(){
   console.log(this.loginForm.value)
}
get Username(){
  return this.loginForm.get('Username')
}
get Age(){
  return this.loginForm.get('Age')
}
get Deposit(){
  return this.loginForm.get('Deposit')
}
}
