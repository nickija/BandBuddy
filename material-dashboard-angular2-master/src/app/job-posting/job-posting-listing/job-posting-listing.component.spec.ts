import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingListingComponent } from './job-posting-listing.component';

describe('JobPostingListingComponent', () => {
  let component: JobPostingListingComponent;
  let fixture: ComponentFixture<JobPostingListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostingListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
