import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL = 'http://127.0.0.1:8000/api'

  constructor(public http: HttpClient) { 

  }
  
  
  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/lista_usuarios')
    .pipe(retry(3));
  }

  getVehiculos():Observable<any>{
    return this.http.get(this.apiURL+'/lista_vehiculos')
    .pipe(retry(3));
  }

  getViajes():Observable<any>{
    return this.http.get(this.apiURL+'/lista_viajes')
    .pipe(retry(3));
  }


}

