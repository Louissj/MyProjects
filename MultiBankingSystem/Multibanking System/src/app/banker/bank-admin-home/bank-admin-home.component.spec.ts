import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminHomeComponent } from './bank-admin-home.component';

describe('BankAdminHomeComponent', () => {
  let component: BankAdminHomeComponent;
  let fixture: ComponentFixture<BankAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
