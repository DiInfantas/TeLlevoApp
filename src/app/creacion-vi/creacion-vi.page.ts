import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular'
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
    public navCtrl: NavController
  ) {
    this.destination = '';
    this.pickupLocation = '';
    this.selectedVehicleType = '';
    this.passengerCount = 1;
    this.costPerPassenger = 1500;
    this.updateTotalCost();
   }

   

  ngOnInit() {
  }
  
  updateTotalCost() {
    this.totalCost = this.passengerCount * this.costPerPassenger;
  }
  
  requestTrip() {
    // Aquí puedes manejar la lógica para enviar la solicitud del viaje
    console.log('Solicitud de viaje enviada');
    console.log('Destino:', this.destination);
    console.log('Ubicación de Recogida:', this.pickupLocation);
    console.log('Tipo de Vehículo:', this.selectedVehicleType);
    console.log('Número de Pasajeros:', this.passengerCount);
    console.log('Costo por Pasajero:', this.costPerPassenger);
  }
  salir(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }
}

