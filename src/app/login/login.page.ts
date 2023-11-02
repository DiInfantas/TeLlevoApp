import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
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
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 
  this.formularioLogin = this.fb.group({
    'Usuario': new FormControl("",Validators.required),
    'password': new FormControl("",Validators.required)

    })
  }
 name: any;
  ngOnInit() {
    }

    Rnombre(){
      this.router.navigate(['/inicio'],{queryParams:{data:this.name}})
    }
    async ingresar() {
      var f = this.formularioLogin.value;
      var usuarioString = localStorage.getItem('usuario');
      if (usuarioString !== null) {
        var usuario = JSON.parse(usuarioString);
        if (usuario.nombre == f.nombre && usuario.password == f.password) {
          console.log('Ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navCtrl.navigateRoot('inicio');
        } else {
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos que ingresaste son incorrectos',
            buttons: ['Aceptar'],
          });
          await alert.present();
        }
      } else {
        
      }

  }
  
}

  
