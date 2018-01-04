import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGridComponent } from './general-grid.component';

describe('GeneralGridComponent', () => {
  let component: GeneralGridComponent;
  let fixture: ComponentFixture<GeneralGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
