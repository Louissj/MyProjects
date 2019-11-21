import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedfoodComponent } from './packedfood.component';

describe('PackedfoodComponent', () => {
  let component: PackedfoodComponent;
  let fixture: ComponentFixture<PackedfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackedfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
