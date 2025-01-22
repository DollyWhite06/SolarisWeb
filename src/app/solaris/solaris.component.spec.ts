import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SolarisComponent } from './solaris.component';

describe('SolarisComponent', () => {
  let component: SolarisComponent;
  let fixture: ComponentFixture<SolarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
