import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  datos: any;

  constructor(private apiService: ApiService) {}

  obtenerDatos() {
    this.apiService.getVehiculos().subscribe(
      (data) => {
        this.datos = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
 
