import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUserDetailsComponent } from './bank-user-details.component';

describe('BankUserDetailsComponent', () => {
  let component: BankUserDetailsComponent;
  let fixture: ComponentFixture<BankUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
