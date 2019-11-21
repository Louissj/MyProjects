import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenAccessoriesComponent } from './women-accessories.component';

describe('WomenAccessoriesComponent', () => {
  let component: WomenAccessoriesComponent;
  let fixture: ComponentFixture<WomenAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
