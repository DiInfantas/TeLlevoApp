import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  hide = true;
  recuerdame = false;

  user = {
    username: '',
    password: '',
  };

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

  login() {
    // Supongamos que el usuario ha iniciado sesión con éxito y tienes el nombre de usuario.
    const username = this.user.username;

    // Navega a la página de perfil y pasa el nombre de usuario como parámetro.
    this.router.navigate(['/users', { username }]);

    // También puedes guardar el nombre de usuario en localStorage o en una variable de servicio si es necesario.
  }
}
