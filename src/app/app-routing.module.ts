import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './components/direccion/direccion.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'direccion/:id',
    component: DireccionComponent
  },
  {
    path: 'confirmacion',
    component: ConfirmacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
