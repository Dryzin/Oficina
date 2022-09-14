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

  constructor(private route : ActivatedRoute,
    private produto : ServicosPrecosService) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    this.ServicosPrecosService = this.produto.enviarDadosId1(id)
  }

}
