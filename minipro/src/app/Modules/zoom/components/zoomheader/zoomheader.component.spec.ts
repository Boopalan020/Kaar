import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomheaderComponent } from './zoomheader.component';

describe('ZoomheaderComponent', () => {
  let component: ZoomheaderComponent;
  let fixture: ComponentFixture<ZoomheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
