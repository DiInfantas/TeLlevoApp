import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {  ActivatedRoute, NavigationExtras } from '@angular/router';
import {  Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    
  formularioLogin: FormGroup;
  nombreUsuario: string = '';
  passUsuario:string = '';


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 
  this.formularioLogin = this.fb.group({
    'nombreUsuario': new FormControl("",Validators.required),
    'password': new FormControl("",Validators.required),

    })
  }
 name: any;

 onSubmit() {
  // Puedes acceder a los valores del formulario usando this.formularioLogin.value
  const nombreUsuario = this.formularioLogin.value.nombreUsuario;
  const passUsuario = this.formularioLogin.value.password;

  this.authService.iniciarSesion(nombreUsuario, passUsuario)
      .subscribe(
        (respuesta) => {
          console.log('Inicio de sesión exitoso', respuesta);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
          this.presAlerta('Error', 'Credenciales inválidas');
        }
      );
  // Realiza acciones según tus necesidades
  }
  
  async presAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    }
    /*
    async ingresar() {
      var f = this.formularioLogin.value;
      
      var f = this.formularioLogin.value;
      var usuarioString = localStorage.getItem('Usuario');
    
      if (usuarioString !== null) {
        var usuario = JSON.parse(usuarioString);
        
        if (usuario.nombre == f.nombre && usuario.password == f.password) {
          console.log('Ingresado');                  
          //localStorage.setItem('ingresado', 'true');
        } else {
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos que ingresaste son incorrectos',
            buttons: ['Aceptar'],
          });
          await alert.present();
        }
      } else {
        // Manejar el caso cuando no hay usuario almacenado
      }
    }
  */
}

  
