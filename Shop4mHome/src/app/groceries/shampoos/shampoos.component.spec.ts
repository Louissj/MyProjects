import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampoosComponent } from './shampoos.component';

describe('ShampoosComponent', () => {
  let component: ShampoosComponent;
  let fixture: ComponentFixture<ShampoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShampoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
