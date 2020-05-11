import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignmentsComponent } from './viewassignments.component';

describe('ViewassignmentsComponent', () => {
  let component: ViewassignmentsComponent;
  let fixture: ComponentFixture<ViewassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
