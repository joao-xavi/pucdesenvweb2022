/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HarmonizacaoService } from './harmonizacao.service';

describe('Service: Harmonizacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HarmonizacaoService]
    });
  });

  it('should ...', inject([HarmonizacaoService], (service: HarmonizacaoService) => {
    expect(service).toBeTruthy();
  }));
});
