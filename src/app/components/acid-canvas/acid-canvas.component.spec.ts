import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidCanvasComponent } from './acid-canvas.component';

describe('AcidCanvasComponent', () => {
  let component: AcidCanvasComponent;
  let fixture: ComponentFixture<AcidCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcidCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
