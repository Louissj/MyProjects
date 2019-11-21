import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeChairComponent } from './office-chair.component';

describe('OfficeChairComponent', () => {
  let component: OfficeChairComponent;
  let fixture: ComponentFixture<OfficeChairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeChairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
