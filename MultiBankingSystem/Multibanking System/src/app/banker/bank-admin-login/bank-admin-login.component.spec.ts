import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminLoginComponent } from './bank-admin-login.component';

describe('BankAdminLoginComponent', () => {
  let component: BankAdminLoginComponent;
  let fixture: ComponentFixture<BankAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
