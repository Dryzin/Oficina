import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoListagemPage } from './servico-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoListagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoListagemPageRoutingModule {}
