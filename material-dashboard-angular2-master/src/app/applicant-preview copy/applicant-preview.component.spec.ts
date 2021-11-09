import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPreviewComponent } from './applicant-preview.component';

describe('ApplicantPreviewComponent', () => {
  let component: ApplicantPreviewComponent;
  let fixture: ComponentFixture<ApplicantPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
