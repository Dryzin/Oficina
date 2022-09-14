import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosListagemService {

  private produtos = [
    {id: 1, nome:'Betonera', valor: 5000.00, quantidade: 10},
    {id: 2, nome:'Capacete', valor: 110.00, quantidade: 20},
    {id: 3, nome:'Marreta', valor: 200.00, quantidade: 5},
    {id: 4, nome:'Furadeira', valor: 250.00, quantidade: 8}
  ]

  constructor() { }


enviarTodosDados(){
  return this.produtos
  }


enviarDadosId(id : number){
  const produtosSelecionados = this.produtos.filter(produto => produto.id === id)
  return produtosSelecionados[0]
}




}