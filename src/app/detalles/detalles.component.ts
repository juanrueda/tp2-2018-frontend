import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private juegosService: JuegosService) { }

  ngOnInit() {
    this.getDetalleJuego();
  }

  detalle : any;

  getDetalleJuego():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.juegosService.getDetalleJuego(id)
      .subscribe(detalle => this.detalle = detalle)
  }

}
