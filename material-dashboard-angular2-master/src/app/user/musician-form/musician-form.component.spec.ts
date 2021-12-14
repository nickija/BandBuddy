import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianFormComponent } from './musician-form.component';

describe('MusicianFormComponent', () => {
  let component: MusicianFormComponent;
  let fixture: ComponentFixture<MusicianFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
