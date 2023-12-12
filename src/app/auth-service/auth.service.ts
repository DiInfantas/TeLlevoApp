import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://nrztflw3-8000.brs.devtunnels.ms/account/login/';
  httpClient: any;

  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: string, contraseña: string) {
    // Datos que se enviarán en el cuerpo de la solicitud POST
    const datos = {
      usuario: usuario,
      contraseña: contraseña
    };

    // Realizar la solicitud POST
    return this.httpClient.post(this.apiUrl, datos);
  }
}

