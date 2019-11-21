import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingAccessoriesComponent } from './cycling-accessories.component';

describe('CyclingAccessoriesComponent', () => {
  let component: CyclingAccessoriesComponent;
  let fixture: ComponentFixture<CyclingAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclingAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclingAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
