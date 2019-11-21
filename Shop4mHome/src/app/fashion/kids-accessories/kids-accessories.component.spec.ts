import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsAccessoriesComponent } from './kids-accessories.component';

describe('KidsAccessoriesComponent', () => {
  let component: KidsAccessoriesComponent;
  let fixture: ComponentFixture<KidsAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
