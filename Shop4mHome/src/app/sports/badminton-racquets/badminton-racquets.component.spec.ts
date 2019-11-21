import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonRacquetsComponent } from './badminton-racquets.component';

describe('BadmintonRacquetsComponent', () => {
  let component: BadmintonRacquetsComponent;
  let fixture: ComponentFixture<BadmintonRacquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadmintonRacquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonRacquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
