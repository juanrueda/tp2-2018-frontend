import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import { Juego } from '../juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [JuegosService]
})
export class ListadoComponent implements OnInit {

  constructor(private juegosService : JuegosService) { }

  ngOnInit() {
    this.getJuegos();
  }

  juego: Juego;
  juegos : Juego[];

  getJuegos():void{
    this.juegosService.getJuegosActivos()
      .subscribe(juegos => { this.juegos = juegos });
  }

  finalizarJuego(id: number){
    var juego = {
      id_juego : id
    }
    this.juegosService.setFinJuego(juego)
  }

}
