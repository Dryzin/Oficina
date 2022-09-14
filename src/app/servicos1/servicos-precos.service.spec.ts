import { TestBed } from '@angular/core/testing';

import { ServicosPrecosService } from './servicos-precos.service';

describe('ServicosPrecosService', () => {
  let service: ServicosPrecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosPrecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
