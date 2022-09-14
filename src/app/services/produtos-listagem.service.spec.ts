import { TestBed } from '@angular/core/testing';

import { ProdutosListagemService } from './produtos-listagem.service';

describe('ProdutosListagemService', () => {
  let service: ProdutosListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
