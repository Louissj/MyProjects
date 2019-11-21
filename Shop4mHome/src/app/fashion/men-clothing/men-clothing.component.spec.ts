import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenClothingComponent } from './men-clothing.component';

describe('MenClothingComponent', () => {
  let component: MenClothingComponent;
  let fixture: ComponentFixture<MenClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
