import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestListingComponent } from './delete-request-listing.component';

describe('DeleteRequestListingComponent', () => {
  let component: DeleteRequestListingComponent;
  let fixture: ComponentFixture<DeleteRequestListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRequestListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRequestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
