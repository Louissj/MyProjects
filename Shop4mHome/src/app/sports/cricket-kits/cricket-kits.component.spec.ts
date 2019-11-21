import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketKitsComponent } from './cricket-kits.component';

describe('CricketKitsComponent', () => {
  let component: CricketKitsComponent;
  let fixture: ComponentFixture<CricketKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
