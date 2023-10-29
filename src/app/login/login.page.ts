import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import {  ActivatedRoute,ParamMap } from '@angular/router';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    
  formularioLogin: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder
) { 
  this.formularioLogin = this.fb.group({
    'Usuario': new FormControl("",Validators.required),
    'password': new FormControl("",Validators.required)

    })
  }

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