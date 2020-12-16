import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomfooterComponent } from './zoomfooter.component';

describe('ZoomfooterComponent', () => {
  let component: ZoomfooterComponent;
  let fixture: ComponentFixture<ZoomfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
