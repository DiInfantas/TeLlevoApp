import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController,NavController } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl,Validators, } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  
})


export class InicioPage implements OnInit {

//variable para saber el nombre del usuario
  usuarioLogin: any;

  //api
  viajes: any[]=[]; //guardado de datos del service
  mostrarViajes: boolean=false;

  nombre: string = 'Pedrito';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    public navCtrl: NavController,
    private apiService: ApiService
    )  { }

    cargarViajes() {
      this.apiService.getViajes().subscribe(data =>{
        //asigna datos a la variable viajes
        this.viajes=data;
        //activa el boolean para mostrar los viajes
        this.mostrarViajes=true;
        console.log('Primer objeto de viaje:', this.viajes[0]);
      })
    }




    //mensaje de 'espere'

    async presentToast(position: 'top' | 'middle' | 'bottom') {
      const toast = await this.toastController.create({
        message: 'Espere porfavor',
        duration: 1500,
        position: position,
      });
  
      await toast.present();
    }
  
  ngOnInit() {  
    
  }

  

  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }

}