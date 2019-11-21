import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBedComponent } from './single-bed.component';

describe('SingleBedComponent', () => {
  let component: SingleBedComponent;
  let fixture: ComponentFixture<SingleBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
