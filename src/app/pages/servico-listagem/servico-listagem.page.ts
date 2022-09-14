import { Component, OnInit } from '@angular/core';
import { ServicosPrecosService } from 'src/app/servicos1/servicos-precos.service';

@Component({
  selector: 'app-servico-listagem',
  templateUrl: './servico-listagem.page.html',
  styleUrls: ['./servico-listagem.page.scss'],
})
export class ServicoListagemPage implements OnInit {

  public todosDados1 : any

  constructor(private dados: ServicosPrecosService) { 
    this.todosDados1 = this.dados.enviarTodosDados1()
  }

  ngOnInit() {
  }

}
