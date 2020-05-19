import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentstatusComponent } from './assignmentstatus.component';

describe('AssignmentstatusComponent', () => {
  let component: AssignmentstatusComponent;
  let fixture: ComponentFixture<AssignmentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
