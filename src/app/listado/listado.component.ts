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

  constructor(private juegoService : JuegosService) { }

  ngOnInit() {
    this.getJuegos();
  }

  juego: Juego;
  juegos : Juego[];

  getJuegos():void{
    this.juegoService.getJuegos()
      .subscribe(juegos => { this.juegos = juegos });
  }

}
