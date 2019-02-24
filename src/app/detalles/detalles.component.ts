import { Component, OnInit, Input } from '@angular/core';
import { JuegosService } from '../juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private juegosService: JuegosService) { }

  detalle: any
  detalles = {}

  ngOnInit() {
    this.getDetalleJuego();
  }

  getDetalleJuego():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.juegosService.getDetalleJuego(id)
      .subscribe(detalles => this.detalles = detalles)
  }

}
