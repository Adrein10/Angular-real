import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
abc(name:any,email:any,pass:any){
  localStorage.setItem("name", name),
  localStorage.setItem("email", email),
  localStorage.setItem("pass", pass)
}
}
