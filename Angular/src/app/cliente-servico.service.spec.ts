import { TestBed } from '@angular/core/testing';

import { ClienteServico } from './cliente-servico.service';

describe('ClienteServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteServico = TestBed.get(ClienteServico);
    expect(service).toBeTruthy();
  });
});
