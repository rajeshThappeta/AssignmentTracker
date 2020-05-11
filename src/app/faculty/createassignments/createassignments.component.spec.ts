import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateassignmentsComponent } from './createassignments.component';

describe('CreateassignmentsComponent', () => {
  let component: CreateassignmentsComponent;
  let fixture: ComponentFixture<CreateassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
