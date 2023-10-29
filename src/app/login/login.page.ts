import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,} from '@angular/forms';
import {  ActivatedRoute,ParamMap } from '@angular/router';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    }


  Login() {
  // Asegúrate de verificar si el inicio de sesión es exitoso antes de navegar
  // Aquí simplemente uso 'username' como un ejemplo
  const username = 'username';
 
  // Preparar los extras de navegación
  const navigationExtras: NavigationExtras = {
     state: {
       username: username
     }
  };
 
  // Navegar a la página de inicio
      this.router.navigate(['/inicio'], navigationExtras);
 }
}