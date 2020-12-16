import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoombodyComponent } from './zoombody.component';

describe('ZoombodyComponent', () => {
  let component: ZoombodyComponent;
  let fixture: ComponentFixture<ZoombodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoombodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoombodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
