import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login(user:any, password:any){
  var localuser = localStorage.getItem('email');
  var localpassword = localStorage.getItem('pass');
  if(user == localuser && password == localpassword)
    {
      alert("Login successful");
    }else{
      alert("Invalid credentials");
    }
}
}
