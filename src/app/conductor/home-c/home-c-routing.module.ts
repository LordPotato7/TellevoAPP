import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCPage } from './home-c.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCPage
  },  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCPageRoutingModule {}
