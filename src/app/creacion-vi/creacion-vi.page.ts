import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { Viaje } from '../models/viaje.model';

@Component({
  selector: 'app-creacion-vi',
  templateUrl: './creacion-vi.page.html',
  styleUrls: ['./creacion-vi.page.scss'],
})
export class CreacionViPage implements OnInit {
  totalCost!: number;
  destination: string;
  pickupLocation: string;
  selectedVehicleType: string;
  passengerCount: number;
  costPerPassenger: number;

  constructor(
    public navCtrl: NavController,
    private apiService: ApiService
  ) {
    this.destination = '';
    this.pickupLocation = '';
    this.selectedVehicleType = '';
    this.passengerCount = 1;
    this.costPerPassenger = 1500;
    this.updateTotalCost();
  }

  ngOnInit() {}

  updateTotalCost() {
    this.totalCost = this.passengerCount * this.costPerPassenger;
  }

  requestTrip() {
    const viaje: Viaje = {
      destino: this.destination,
      ubicacionRecogida: this.pickupLocation,
      tipoVehiculo: this.selectedVehicleType,
      numeroPasajeros: this.passengerCount,
      costoTotal: this.totalCost,
    };

    this.apiService.createViaje(viaje).subscribe(
      (response: any) => {
        console.log('Solicitud de viaje enviada. Respuesta de la API:', response);
        // Maneja la respuesta según sea necesario
      },
      (error: any) => {
        console.error('Error al enviar datos a la API:', error);
        // Maneja el error según sea necesario
      }
    );
  }

  salir() {
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }
}
