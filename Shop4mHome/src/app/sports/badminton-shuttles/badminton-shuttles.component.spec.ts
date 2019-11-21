import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonShuttlesComponent } from './badminton-shuttles.component';

describe('BadmintonShuttlesComponent', () => {
  let component: BadmintonShuttlesComponent;
  let fixture: ComponentFixture<BadmintonShuttlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadmintonShuttlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonShuttlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
