import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChairComponent } from './home-chair.component';

describe('HomeChairComponent', () => {
  let component: HomeChairComponent;
  let fixture: ComponentFixture<HomeChairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
