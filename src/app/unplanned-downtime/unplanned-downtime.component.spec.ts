import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplannedDowntimeComponent } from './unplanned-downtime.component';

describe('UnplannedDowntimeComponent', () => {
  let component: UnplannedDowntimeComponent;
  let fixture: ComponentFixture<UnplannedDowntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplannedDowntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplannedDowntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
