import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpayComponent } from './dashboardpay.component';

describe('DashboardpayComponent', () => {
  let component: DashboardpayComponent;
  let fixture: ComponentFixture<DashboardpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
