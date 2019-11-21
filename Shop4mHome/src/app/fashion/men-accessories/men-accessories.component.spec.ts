import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenAccessoriesComponent } from './men-accessories.component';

describe('MenAccessoriesComponent', () => {
  let component: MenAccessoriesComponent;
  let fixture: ComponentFixture<MenAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
