import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftdivComponent } from './leftdiv.component';

describe('LeftdivComponent', () => {
  let component: LeftdivComponent;
  let fixture: ComponentFixture<LeftdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
