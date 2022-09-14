import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'produtos-detalhes/:id',
    loadChildren: () => import('./pages/produtos-detalhes/produtos-detalhes.module').then( m => m.ProdutosDetalhesPageModule)
  },
  {
    path: 'produtos-listagem',
    loadChildren: () => import('./pages/produtos-listagem/produtos-listagem.module').then( m => m.ProdutosListagemPageModule)
  },
  {
    path: 'servico-listagem',
    loadChildren: () => import('./pages/servico-listagem/servico-listagem.module').then( m => m.ServicoListagemPageModule)
  },
  {
    path: 'servico-detalhes/:id',
    loadChildren: () => import('./pages/servico-detalhes/servico-detalhes.module').then( m => m.ServicoDetalhesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
