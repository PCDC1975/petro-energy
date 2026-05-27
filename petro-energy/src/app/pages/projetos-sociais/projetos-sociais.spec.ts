import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosSociais } from './projetos-sociais';

describe('ProjetosSociais', () => {
  let component: ProjetosSociais;
  let fixture: ComponentFixture<ProjetosSociais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosSociais],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetosSociais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
