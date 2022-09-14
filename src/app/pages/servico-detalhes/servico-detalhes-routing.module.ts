import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoDetalhesPage } from './servico-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoDetalhesPageRoutingModule {}
