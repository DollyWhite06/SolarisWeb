import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranosSolarisComponent } from './granos-solaris.component';

describe('GranosSolarisComponent', () => {
  let component: GranosSolarisComponent;
  let fixture: ComponentFixture<GranosSolarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GranosSolarisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranosSolarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
