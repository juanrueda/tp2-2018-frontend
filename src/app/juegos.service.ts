import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import {Juego} from './juego';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class JuegosService {

  constructor(private http : HttpClient) { }
  private base_url = 'http://localhost:3000';

  getJuegosActivos():Observable<any>{
    return this.http.get(this.base_url+'/juegos/activos');
  }

  getDetalleJuego(id: number):Observable<any>{
    return this.http.get(this.base_url+'/juegos/'+id);
  }

  setFinJuego(juego : any): Observable<any>{
    return this.http.post<any>(this.base_url+'/juegos/finalizarJuego', juego, httpOptions);
  }
}
