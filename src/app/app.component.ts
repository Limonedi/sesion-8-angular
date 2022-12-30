import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tare8';
    usuario = 'Angular';
    password = '123456';
    isLoggedIn = false;
  
    checkCredentials() {
      if (this.username === this.usuario && this.password === this.password) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    }
  }
  

