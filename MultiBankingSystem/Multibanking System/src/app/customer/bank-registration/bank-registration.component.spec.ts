import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRegistrationComponent } from './bank-registration.component';

describe('BankRegistrationComponent', () => {
  let component: BankRegistrationComponent;
  let fixture: ComponentFixture<BankRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
