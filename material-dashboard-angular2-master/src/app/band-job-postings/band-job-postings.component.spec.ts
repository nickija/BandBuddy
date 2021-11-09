import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandJobPostingsComponent } from './band-job-postings.component';

describe('BandJobPostingsComponent', () => {
  let component: BandJobPostingsComponent;
  let fixture: ComponentFixture<BandJobPostingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandJobPostingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandJobPostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
