import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosPrecosService } from 'src/app/servicos1/servicos-precos.service';

@Component({
  selector: 'app-servico-detalhes',
  templateUrl: './servico-detalhes.page.html',
  styleUrls: ['./servico-detalhes.page.scss'],
})
export class ServicoDetalhesPage implements OnInit {

  public ServicosPrecosService : any
  public modoEdicao = false

  constructor(private route : ActivatedRoute,
    private produto : ServicosPrecosService) { }

  ngOnInit(){
      const id : number = Number(this.route.snapshot.paramMap.get('id'))
      if (id > 0){
        this.ServicosPrecosService = this.produto.enviarDadosId1(id)
      } else{
        this.ServicosPrecosService = {id, nome: "", valor: 0.0}
        this.modoEdicao = true
      }
  }

  deletarServico(){
    this.produto.deletaDados(this.ServicosPrecosService)
  }

  iniciarEdicao(){
    this.modoEdicao = true
  }
  encerrarEdicao()  {
    const id: number = Number(this.route.snapshot.paramMap.get('id'))

    if (id > 0) {
    this.modoEdicao = false
    
    }else{
    
    this.produto.recebeDados(this.ServicosPrecosService)
    this.modoEdicao = false
  }
}

}
