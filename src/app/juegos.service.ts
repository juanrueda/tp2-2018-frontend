import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

}
