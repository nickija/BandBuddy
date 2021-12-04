import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandListingComponent } from './band-listing.component';

describe('BandListingComponent', () => {
  let component: BandListingComponent;
  let fixture: ComponentFixture<BandListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
