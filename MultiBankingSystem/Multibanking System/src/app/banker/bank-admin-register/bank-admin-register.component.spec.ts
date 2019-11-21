import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminRegisterComponent } from './bank-admin-register.component';

describe('BankAdminRegisterComponent', () => {
  let component: BankAdminRegisterComponent;
  let fixture: ComponentFixture<BankAdminRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
