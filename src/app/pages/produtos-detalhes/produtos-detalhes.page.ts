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


  constructor(private route : ActivatedRoute,
    private produto : ProdutosListagemService) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    this.produtoSelecionado = this.produto.enviarDadosId(id)
  }

}
