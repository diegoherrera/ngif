import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caso3Component } from './caso3.component';

describe('Caso3Component', () => {
  let component: Caso3Component;
  let fixture: ComponentFixture<Caso3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caso3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
