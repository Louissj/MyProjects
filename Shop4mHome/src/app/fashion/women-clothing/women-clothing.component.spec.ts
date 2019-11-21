import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenClothingComponent } from './women-clothing.component';

describe('WomenClothingComponent', () => {
  let component: WomenClothingComponent;
  let fixture: ComponentFixture<WomenClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
