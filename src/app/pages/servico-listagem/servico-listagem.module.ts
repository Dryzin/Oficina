import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoListagemPageRoutingModule } from './servico-listagem-routing.module';

import { ServicoListagemPage } from './servico-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoListagemPageRoutingModule
  ],
  declarations: [ServicoListagemPage]
})
export class ServicoListagemPageModule {}
