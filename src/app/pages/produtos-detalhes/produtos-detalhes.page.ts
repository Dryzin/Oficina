import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosListagemService } from 'src/app/services/produtos-listagem.service';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.page.html',
  styleUrls: ['./produtos-detalhes.page.scss'],
})
export class ProdutosDetalhesPage implements OnInit {
  public produtoSelecionado : any
  public modoEdicao = false

  constructor(
    private route : ActivatedRoute,
    private produto : ProdutosListagemService) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.produtoSelecionado = this.produto.enviarDadosId(id)
    } else{
      this.produtoSelecionado = {id, nome: "", valor: 0.0}
      this.modoEdicao = true
    }
  }

  deletarServico(){
    this.produto.deletaDados(this.produtoSelecionado)
  }

  iniciarEdicao(){
    this.modoEdicao = true
  }
  encerrarEdicao(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'))

    if (id > 0) {
    this.modoEdicao = false
    
    }else{
    
    this.produto.recebeDados(this.produtoSelecionado)
    this.modoEdicao = false
  }
}
}
