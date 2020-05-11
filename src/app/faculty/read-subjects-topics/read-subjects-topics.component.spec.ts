import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSubjectsTopicsComponent } from './read-subjects-topics.component';

describe('ReadSubjectsTopicsComponent', () => {
  let component: ReadSubjectsTopicsComponent;
  let fixture: ComponentFixture<ReadSubjectsTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadSubjectsTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSubjectsTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
