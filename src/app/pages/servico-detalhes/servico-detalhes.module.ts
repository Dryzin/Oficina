import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoDetalhesPageRoutingModule } from './servico-detalhes-routing.module';

import { ServicoDetalhesPage } from './servico-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoDetalhesPageRoutingModule
  ],
  declarations: [ServicoDetalhesPage]
})
export class ServicoDetalhesPageModule {}
