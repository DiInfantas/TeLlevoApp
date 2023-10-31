import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/lista_Usuarios')
    .pipe(retry(3));
  }

  getVehiculos():Observable<any>{
    return this.http.get(this.apiURL+'/lista_Vehiculos')
    .pipe(retry(3));
  }
  getViajes():Observable<any>{
    return this.http.get(this.apiURL+'/lista_Viajes')
    .pipe(retry(3));
  }

}
