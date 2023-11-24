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
  datos = []

  nombre: string = 'Pedrito';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    public navCtrl: NavController,
    private api: ApiService
 
    
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
    this.http.get<any>('http://127.0.0.1:8000/api/lista_viajes')
    .subscribe(res => {
      console.log(res);
      this.datos = res.results;

    })
  }

  

  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }

}