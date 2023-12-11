import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://nrztflw3-8000.brs.devtunnels.ms/api/';

  constructor(private http: HttpClient) { }

  iniciarSesion(nombreUsuario: string, passUsuario: string): Observable <any> {
    const url = `${this.apiUrl}iniciar-sesion/`;

    const datosInicioSesion = {
      nombreUsuario: nombreUsuario,
      passUsuario: passUsuario
    };

    return this.http.post(url, datosInicioSesion);
  }

}
