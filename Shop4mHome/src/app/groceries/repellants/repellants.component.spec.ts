import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepellantsComponent } from './repellants.component';

describe('RepellantsComponent', () => {
  let component: RepellantsComponent;
  let fixture: ComponentFixture<RepellantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepellantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepellantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
