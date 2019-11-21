import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsFootwearComponent } from './kids-footwear.component';

describe('KidsFootwearComponent', () => {
  let component: KidsFootwearComponent;
  let fixture: ComponentFixture<KidsFootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsFootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
