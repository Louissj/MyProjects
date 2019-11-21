import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminNavComponent } from './bank-admin-nav.component';

describe('BankAdminNavComponent', () => {
  let component: BankAdminNavComponent;
  let fixture: ComponentFixture<BankAdminNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
