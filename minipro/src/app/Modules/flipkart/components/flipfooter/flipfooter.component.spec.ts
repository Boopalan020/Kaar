import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipfooterComponent } from './flipfooter.component';

describe('FlipfooterComponent', () => {
  let component: FlipfooterComponent;
  let fixture: ComponentFixture<FlipfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
