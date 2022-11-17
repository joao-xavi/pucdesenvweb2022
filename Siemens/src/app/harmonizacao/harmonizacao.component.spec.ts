import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HarmonizacaoComponent} from './harmonizacao.component';

describe('HarmonzacaoComponent', () => {
  let component: HarmonizacaoComponent;
  let fixture: ComponentFixture<HarmonizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmonizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmonizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
