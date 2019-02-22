import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import {HttpClientModule} from'@angular/common/http';



import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { JuegosService } from './juegos.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, AppRoutingModule,
    FormsModule,

  ],
  providers: [JuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
