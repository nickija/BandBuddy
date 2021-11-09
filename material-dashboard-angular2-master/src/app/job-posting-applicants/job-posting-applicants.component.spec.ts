import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingApplicantsComponent } from './job-posting-applicants.component';

describe('JobPostingApplicantsComponent', () => {
  let component: JobPostingApplicantsComponent;
  let fixture: ComponentFixture<JobPostingApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
