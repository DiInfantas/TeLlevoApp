import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-creacion-vi',
  templateUrl: './creacion-vi.page.html',
  styleUrls: ['./creacion-vi.page.scss'],
})
export class CreacionViPage implements OnInit {

  viajeForm: FormGroup;
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Si',
      cssClass: 'alert-button-confirm',
      handler:() => {
        this.navCtrl.navigateForward('/ingreso-vehi');
      }
    },
  ];

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController,
    private apiService: ApiService,
    private formBuilder: FormBuilder  // Agrega el formBuilder
  ) {
    this.viajeForm = this.formBuilder.group({
      inicio: ['', Validators.required],
      destino: ['', Validators.required],
      horaSalida: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async crearViaje() {
    if (this.viajeForm.valid) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Su viaje ha sido creado correctamente.',
        buttons: ['OK']
        
      });
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos O Incompletos',
        message: 'Corrigue los Datos',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
    }

}
