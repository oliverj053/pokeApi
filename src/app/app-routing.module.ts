import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './Componente/detalle/detalle.component';
import { InicioComponent } from './Componente/inicio/inicio.component';

const routes: Routes = [
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', pathMatch:'full', redirectTo:'inicio'},
  {path: '**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
