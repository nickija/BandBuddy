import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandFormComponent } from './edit-band-form.component';

describe('EditBandFormComponent', () => {
  let component: EditBandFormComponent;
  let fixture: ComponentFixture<EditBandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
