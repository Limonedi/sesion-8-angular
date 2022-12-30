import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tare8';

  personas: string;
  nombre: string;
  edad: number;
  apellidos:string;
  
  usuario = 'Angular';
  appPassword = '123456';
  username: string;
  loginPassword: string;
  
  isLoggedIn = false;
  links = [
    {
      title: 'Inicio',
      url: '/home'
    },
    {
      title: 'Acerca de',
      url: '/about'
    },
    {
      title: 'Contacto',
      url: '/contact'
    }
  ];

  checkCredentials() {
    if (this.username === this.usuario && this.loginPassword === this.appPassword) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
  } 
  }}
