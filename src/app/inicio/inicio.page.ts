import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController,NavController } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl,Validators, } from '@angular/forms';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  
})
export class InicioPage implements OnInit {

//variable para saber el nombre del usuario
  usuarioLogin: any;

  nombre: string = 'Pedrito';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    public navCtrl: NavController
    
    ) { }
    async presentToast(position: 'top' | 'middle' | 'bottom') {
      const toast = await this.toastController.create({
        message: 'Espere porfavor',
        duration: 1500,
        position: position,
      });
  
      await toast.present();
    }
  
 
  ngOnInit() {
    this.usuarioLogin = this.router.getCurrentNavigation()?.extras.state;
  } 

  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }
}