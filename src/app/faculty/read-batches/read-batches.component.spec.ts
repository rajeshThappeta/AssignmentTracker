import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBatchesComponent } from './read-batches.component';

describe('ReadBatchesComponent', () => {
  let component: ReadBatchesComponent;
  let fixture: ComponentFixture<ReadBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
