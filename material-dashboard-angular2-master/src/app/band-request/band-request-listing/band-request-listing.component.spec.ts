import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandRequestListingComponent } from './band-request-listing.component';

describe('BandRequestListingComponent', () => {
  let component: BandRequestListingComponent;
  let fixture: ComponentFixture<BandRequestListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandRequestListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandRequestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
