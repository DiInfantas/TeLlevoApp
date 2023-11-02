import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  
  name: any;
 
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
    this.route.queryParams.subscribe((params:any) => {
      console.log(params)
      this.name = params.data  
    })
  } 

  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }
}