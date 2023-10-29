import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    //this.grabar_localstorage();
    this.obtener_localstorage();
  }


  obtener_localstorage(){
    let usuario = JSON.stringify(localStorage.getItem('usuario'));

    let nombre = localStorage.getItem("nombre");
    let persona = JSON.stringify(localStorage.getItem("persona"));
    
    console.log(nombre);
    console.log(persona);
    console.log(usuario);
  }

  grabar_localstorage(){
    
    let usuario = {
      id: 1,
      nombre: 'Juan',
      correo: 'juan@gmail.com',
      clave: '123456'
     };
     
     

    let nombre = "Nico robin";
    
    let persona ={
      nombre:"Tomas",
      edad: 21,
      coords:{
        lat: 10,
        lng: -10

      }


    }

  localStorage.setItem("nombre",nombre);
  localStorage.setItem("persona",JSON.stringify(persona));
  
  
  localStorage.setItem('usuario', JSON.stringify(usuario));

  }

}
