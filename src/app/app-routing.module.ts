import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado/detalles/:id', component: DetallesComponent},
  { path: 'listado', component: ListadoComponent }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }