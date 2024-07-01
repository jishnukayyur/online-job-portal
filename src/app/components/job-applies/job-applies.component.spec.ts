import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppliesComponent } from './job-applies.component';

describe('JobAppliesComponent', () => {
  let component: JobAppliesComponent;
  let fixture: ComponentFixture<JobAppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JobAppliesComponent]
    });
    fixture = TestBed.createComponent(JobAppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
