import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketBatComponent } from './cricket-bat.component';

describe('CricketBatComponent', () => {
  let component: CricketBatComponent;
  let fixture: ComponentFixture<CricketBatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketBatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
