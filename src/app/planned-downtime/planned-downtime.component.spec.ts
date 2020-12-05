import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedDowntimeComponent } from './planned-downtime.component';

describe('PlannedDowntimeComponent', () => {
  let component: PlannedDowntimeComponent;
  let fixture: ComponentFixture<PlannedDowntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedDowntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedDowntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
