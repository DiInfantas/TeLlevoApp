import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
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
 
  

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 
      
  }
  onLoginClick(usuario: string, contraseña: string) {
    this.authService.iniciarSesion(usuario, contraseña).subscribe(
      (respuesta: any) => {
        console.log('Inicio de sesión exitoso:', respuesta);
        // Manejar la respuesta según sea necesario (por ejemplo, redireccionar a otra página)
      },
      (error: any) => {
        console.error('Error en el inicio de sesión:', error);
        // Manejar el error según sea necesario
      }
    );
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

  
