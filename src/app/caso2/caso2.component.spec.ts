import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caso2Component } from './caso2.component';

describe('Caso2Component', () => {
  let component: Caso2Component;
  let fixture: ComponentFixture<Caso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caso2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
