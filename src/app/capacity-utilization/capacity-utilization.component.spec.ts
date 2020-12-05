import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityUtilizationComponent } from './capacity-utilization.component';

describe('CapacityUtilizationComponent', () => {
  let component: CapacityUtilizationComponent;
  let fixture: ComponentFixture<CapacityUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
