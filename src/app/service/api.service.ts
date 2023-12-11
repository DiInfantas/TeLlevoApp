import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';
import { Viaje } from '../models/viaje.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL = 'https://nrztflw3-8000.brs.devtunnels.ms/api'

  constructor(public http: HttpClient) { 

  }
  getViajes():Observable<any>{
    return this.http.get(this.apiURL+'/lista_viajes')
    .pipe(retry(3));
  }

  createViaje(viaje: Viaje): Observable<Viaje>{
    return this.http.post<Viaje>(`${this.apiURL}/nrztflw3-8000.brs.devtunnels.ms/api`, viaje);

  }
}


