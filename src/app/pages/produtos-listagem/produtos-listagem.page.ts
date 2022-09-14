import { Component, OnInit } from '@angular/core';
import { ProdutosListagemService } from 'src/app/services/produtos-listagem.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.page.html',
  styleUrls: ['./produtos-listagem.page.scss'],
})
export class ProdutosListagemPage implements OnInit {

  public todosDados : any

  constructor(private dados : ProdutosListagemService) {
    this.todosDados = this.dados.enviarTodosDados()
   }

  ngOnInit() {
  }

}
