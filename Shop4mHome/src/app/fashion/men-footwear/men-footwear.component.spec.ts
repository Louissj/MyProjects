import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenFootwearComponent } from './men-footwear.component';

describe('MenFootwearComponent', () => {
  let component: MenFootwearComponent;
  let fixture: ComponentFixture<MenFootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenFootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
