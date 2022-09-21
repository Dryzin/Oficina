import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosPrecosService {

  private servicos1 = [
    {id: 1, nome:'Revisão', valor: 120.00, quantidade: 10},
    {id: 2, nome:'Troca de Pneu', valor: 110.00, quantidade: 20},
    {id: 3, nome:'Lava-Jato', valor: 60.00, quantidade: 5},
    {id: 4, nome:'Pintura', valor: 250.00, quantidade: 8}
  ]

  constructor() { }

  enviarTodosDados1(){
    return this.servicos1
    }
  
  
  enviarDadosId1(id : number){
    const servicoSelecionados = this.servicos1.filter(produto => produto.id === id)
    return servicoSelecionados[0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.servicos1.length + 1
    this.servicos1.push(dadosRecebidos)
  }

  deletaDados(dadosRecebidos : any){
    this.servicos1.splice(this.servicos1.indexOf(dadosRecebidos),1)
  }
}
