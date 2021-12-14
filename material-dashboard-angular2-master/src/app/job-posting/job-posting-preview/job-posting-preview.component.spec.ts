import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingPreviewComponent } from './job-posting-preview.component';

describe('JobPostingPreviewComponent', () => {
  let component: JobPostingPreviewComponent;
  let fixture: ComponentFixture<JobPostingPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
