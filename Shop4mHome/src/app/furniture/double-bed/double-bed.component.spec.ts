import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBedComponent } from './double-bed.component';

describe('DoubleBedComponent', () => {
  let component: DoubleBedComponent;
  let fixture: ComponentFixture<DoubleBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
