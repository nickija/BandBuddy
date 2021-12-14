import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingFormComponent } from './job-posting-form.component';

describe('JobPostingFormComponent', () => {
  let component: JobPostingFormComponent;
  let fixture: ComponentFixture<JobPostingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
