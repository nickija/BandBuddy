import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandPreviewComponent } from './band-preview.component';

describe('BandPreviewComponent', () => {
  let component: BandPreviewComponent;
  let fixture: ComponentFixture<BandPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
