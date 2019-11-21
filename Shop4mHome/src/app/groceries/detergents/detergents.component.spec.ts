import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetergentsComponent } from './detergents.component';

describe('DetergentsComponent', () => {
  let component: DetergentsComponent;
  let fixture: ComponentFixture<DetergentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetergentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetergentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
