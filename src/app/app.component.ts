import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tare8';
  usu:string = 'usuario';
  pass:string = '12345678';

  login(usuario:string, password:string){
    if(usuario === this.usu && password === this.pass){
      alert('usuario correcto')
    }else{
      alert('usuario INCORRECTO')
    }  } }
